// window.addEventListener('scroll', function() {
//     const header = document.querySelector('header');
//     if (window.scrollY > 50) {
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     }
// });

// Wait for the DOM to be fully loaded


document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes once the page is loaded
    setTimeout(function() {
        const heading = document.querySelector('.banner-image h1');
        const paragraph = document.querySelector('.banner-image p');
        
        heading.classList.add('animated');
        paragraph.classList.add('animated');
    }, 300);
   
    // Optional: Trigger animations when scrolled into view
    // Only needed if your hero section is not at the top of the page
    function checkIfInView() {
        const heroSection = document.querySelector('.hero-section');
        const heading = document.querySelector('.banner-image h1');
        const paragraph = document.querySelector('.banner-image p');
        
        const elementTop = heroSection.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            heading.classList.add('animated');
            paragraph.classList.add('animated');
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', checkIfInView);
    
    // Check if in view on page load
    checkIfInView();
});


document.addEventListener('DOMContentLoaded', function() {
    // Get page elements
    const eventsSection = document.querySelector('.upcoming-events');
    const heroSection = document.querySelector('.hero-section');
    const header = document.querySelector('header'); // Assuming there's a header element
    
    // Get/create other page sections that should be hidden when showing event details
    const pageSections = document.querySelectorAll('body > div:not(header)');
    
    // Create event details container (initially hidden)
    const eventDetailsContainer = document.createElement('div');
    eventDetailsContainer.className = 'event-details-container';
    eventDetailsContainer.style.display = 'none';
    
    // Insert the details container after the header (or at the start of body if no header)
    if (header) {
        header.insertAdjacentElement('afterend', eventDetailsContainer);
    } else {
        document.body.insertAdjacentElement('afterbegin', eventDetailsContainer);
    }













    
    // HTML template for event details
    const eventDetailsTemplate = `
        <a href="#" class="back-button">← Back to Home</a>
        
        <h1 id="eventTitle" class="event-title">Event Title</h1>
        <p id="eventDate" class="event-date">Event Date</p>
        
        <img id="eventImage" src="upcomming/image.png" alt="Event Image" class="event-image">
        
        <div class="event-description" id="eventDescription">
            <!-- Event description will be populated by JavaScript -->
        </div>
        
        <div class="event-details-section">
            <h3>Event Schedule</h3>
            <div id="eventSchedule">
                <!-- Schedule will be populated by JavaScript -->
            </div>
        </div>
        
        <div class="event-details-section">
            <h3>Registration Information</h3>
            <div id="registrationInfo">
                <!-- Registration info will be populated by JavaScript -->
            </div>
        </div>
        
        <button class="register-button">Register Now</button>
    `;
    
    // Get all read more buttons
    const readMoreButtons = document.querySelectorAll('.event-details button');
    
    // Function to hide all page sections except header
    function hidePageSections() {
        pageSections.forEach(section => {
            if (section !== eventDetailsContainer && section !== header) {
                section.style.display = 'none';
            }
        });
    }
    
    // Function to show all page sections
    function showPageSections() {
        pageSections.forEach(section => {
            if (section !== eventDetailsContainer) {
                section.style.display = '';
            }
        });
    }
    
    // Add click event to each read more button
    readMoreButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            
            // Get the event details from the parent elements
            const card = button.closest('.event-card');
            const title = card.querySelector('h3').textContent;
            const date = card.querySelector('.event-date').textContent;
            const briefDesc = card.querySelector('p:not(.event-date)').textContent;
            
            // Hide all page sections except header
            hidePageSections();
            
            // Show and populate the event details container
            eventDetailsContainer.innerHTML = eventDetailsTemplate;
            eventDetailsContainer.style.display = 'block';
            
            // Populate the basic event information
            document.getElementById('eventTitle').textContent = title;
            document.getElementById('eventDate').textContent = date;
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Create more detailed content based on the event
            let fullDescription, schedule, registrationInfo;
            
            if (index === 0) { // First event (Annual Robotics Challenge)
                fullDescription = briefDesc + " The Annual Robotics Challenge is our flagship event where innovation meets competition. This year's theme focuses on sustainable automation, challenging participants to create robots that can tackle real-world environmental problems. The competition will be held over two days with preliminary rounds, workshops, networking sessions, and final demonstrations.";
                
                schedule = `
                    <p><strong>Day 1 (June 15):</strong><br>
                    9:00 AM - Registration and Team Setup<br>
                    10:00 AM - Opening Ceremony and Rules Briefing<br>
                    11:00 AM - Preliminary Round Begins<br>
                    1:00 PM - Lunch Break<br>
                    2:00 PM - Technical Workshops<br>
                    5:00 PM - Day 1 Concludes</p>
                    
                    <p><strong>Day 2 (June 16):</strong><br>
                    9:00 AM - Semi-Finals<br>
                    12:00 PM - Lunch Break<br>
                    1:00 PM - Finals<br>
                    3:00 PM - Industry Speaker Panel<br>
                    4:30 PM - Awards Ceremony<br>
                    5:30 PM - Networking Reception</p>
                `;
                
                registrationInfo = `
                    <p>Registration opens May 1st, 2025 and closes June 1st, 2025.</p>
                    <p><strong>Registration Fee:</strong> $25 per team (3-5 members)</p>
                    <p><strong>What's Included:</strong> Competition entry, workshop access, lunch on both days, and BUILD CLUB merchandise.</p>
                    <p><strong>Required Materials:</strong> Teams should bring their own laptops and basic tools. Core robotics components will be provided to all teams.</p>
                `;
            } else { // Second event (Drone Design Workshop)
                fullDescription = briefDesc + " This intensive one-day workshop will provide a comprehensive introduction to drone technology and design principles. Participants will learn about aerodynamics, electronics, control systems, and programming fundamentals that make drones function. By the end of the day, each participant will have built their own mini-drone to take home.";
                
                schedule = `
                    <p><strong>Workshop Schedule (July 8):</strong><br>
                    9:00 AM - Check-in and Materials Distribution<br>
                    9:30 AM - Introduction to Drone Technology<br>
                    10:30 AM - Aerodynamics and Design Principles<br>
                    12:00 PM - Lunch Break<br>
                    1:00 PM - Electronics and Control Systems<br>
                    2:30 PM - Building Your Drone (Hands-on Session)<br>
                    4:00 PM - Programming Flight Patterns<br>
                    5:00 PM - Test Flight and Troubleshooting<br>
                    6:00 PM - Workshop Concludes</p>
                `;
                
                registrationInfo = `
                    <p>Registration opens June 1st, 2025 and closes July 1st, 2025 or when all spots are filled.</p>
                    <p><strong>Registration Fee:</strong> $40 per participant</p>
                    <p><strong>What's Included:</strong> All drone components and materials, tools for use during the workshop, lunch, and refreshments.</p>
                    <p><strong>Prerequisites:</strong> No prior experience with drones or electronics is required. This workshop is designed for beginners and enthusiasts alike.</p>
                    <p><strong>Capacity:</strong> Limited to 30 participants to ensure quality instruction.</p>
                `;
            }
            
            // Set the content
            document.getElementById('eventDescription').innerHTML = fullDescription;
            document.getElementById('eventSchedule').innerHTML = schedule;
            document.getElementById('registrationInfo').innerHTML = registrationInfo;
            
            // Back button functionality
            document.querySelector('.back-button').addEventListener('click', function(e) {
                e.preventDefault();
                
                // Hide the event details
                eventDetailsContainer.style.display = 'none';
                
                // Show all the other page sections
                showPageSections();
                
                // Scroll back to events section
                eventsSection.scrollIntoView({ behavior: 'smooth' });
            });
            
            // Registration button functionality
            document.querySelector('.register-button').addEventListener('click', function() {
                alert('Registration will open soon! Please check back later.');
            });
        });
    });
    
    // Add hover effect to event cards (but NOT click effect)
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add a subtle scale effect
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 15px 30px rgba(255, 107, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            // Remove the scale effect
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
        
        // Removed the card click handler completely - only buttons will trigger the read more
    });
    
    // Animate cards when they come into view
    function checkForAnimation() {
        const cards = document.querySelectorAll('.event-card');
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.8;
            
            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animation
    eventCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check on scroll and on load
    window.addEventListener('scroll', checkForAnimation);
    checkForAnimation(); // Check on load
});











 














// for gallery section

// document.addEventListener('DOMContentLoaded', function() {
//     const gallery = document.querySelector('.gallery');
//     const gallerySection = document.querySelector('.gallery-section');
//     let glow = null; // <-- Track glow reference

    // Clone gallery items for seamless scroll
    // const items = Array.from(gallery.children);
    // items.forEach(item => {
    //     const clone = item.cloneNode(true);
    //     gallery.appendChild(clone);
    // });

    // Adjust animation duration based on items
    // const totalItems = gallery.children.length;
    // gallery.style.animationDuration = `${totalItems * 6}s`;

    // gallery.addEventListener('mouseenter', () => {
    //     gallery.style.animationPlayState = 'paused';
    // });

    // gallery.addEventListener('mouseleave', () => {
    //     gallery.style.animationPlayState = 'running';
    // });

    // gallerySection.addEventListener('mouseenter', () => {
    //     gallerySection.classList.add('active-border');

        // Add cursor glow
    //     glow = document.createElement('div');
    //     glow.className = 'cursor-glow';
    //     gallerySection.appendChild(glow);
    // });

    // gallerySection.addEventListener('mouseleave', () => {
    //     gallerySection.classList.remove('active-border');

        // Remove cursor glow
//         if (glow) {
//             glow.remove();
//             glow = null;
//         }
//     });

//     gallerySection.addEventListener('mousemove', (e) => {
//         if (!glow) return;

//         const rect = gallerySection.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         glow.style.left = `${x}px`;
//         glow.style.top = `${y}px`;
//     });
// });
















// for past events
/* JavaScript for animations and interactions */
document.addEventListener('DOMContentLoaded', function() {
    // Get all past event elements
    const pastEvents = document.querySelectorAll('.past-events .event');
    
    // Create intersection observer to trigger animations when events come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element is visible
                entry.target.style.animation = 'fadeIn 0.8s ease forwards';
                // Stop observing after animation is added
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });
    
    // Set initial state and observe each event
    pastEvents.forEach((event, index) => {
        // Set initial opacity to 0
        event.style.opacity = '0';
        // Add delay to each event for staggered animation
        event.style.animationDelay = `${index * 0.2}s`;
        // Start observing
        observer.observe(event);
    });
    
    // Add hover effect for event cards
    pastEvents.forEach(event => {
        event.addEventListener('mouseenter', () => {
            // Add custom hover class or effect if needed
            event.classList.add('event-hover');
        });
        
        event.addEventListener('mouseleave', () => {
            event.classList.remove('event-hover');
        });
    });
    
    // Fix for container layout if needed
    const pastEventsContainer = document.querySelector('.past-events');
    if (pastEventsContainer) {
        // Make sure the title is separate from the events container
        const title = pastEventsContainer.querySelector('h2:first-child');
        const eventsWrapper = document.createElement('div');
        eventsWrapper.className = 'events-wrapper';
        
        // Move all events into the wrapper
        Array.from(pastEventsContainer.children).forEach(child => {
            if (child !== title) {
                eventsWrapper.appendChild(child);
            }
        });
        
        // Add the wrapper to the container after the title
        pastEventsContainer.appendChild(eventsWrapper);
    }
});













// for why join us  

// document.addEventListener('DOMContentLoaded', function() {
//     const joinUsSection = document.querySelector('.why-join-us');
//     let glow = null;
    
    // Animated border on hover
    // joinUsSection.addEventListener('mouseenter', () => {
    //     joinUsSection.classList.add('active-border');
        
        // Create glow element on mouse enter
    //     glow = document.createElement('div');
    //     glow.className = 'cursor-glow';
    //     joinUsSection.appendChild(glow);
    // });
    
    // joinUsSection.addEventListener('mouseleave', () => {
    //     joinUsSection.classList.remove('active-border');
        
        // Remove glow element on mouse leave
    //     if (glow) {
    //         glow.remove();
    //         glow = null;
    //     }
    // });
    
    // Glow spotlight following cursor
//     joinUsSection.addEventListener('mousemove', (e) => {
//         if (!glow) return;
        
//         const rect = joinUsSection.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
        
//         glow.style.left = `${x}px`;
//         glow.style.top = `${y}px`;
//     });
// });












// for our achivement 
  
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the Read more button
    const readMoreBtn = document.getElementById('read-more-btn');
    
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function() {
            // Navigate to the details page
            window.location.href = 'achievements-detail.html';
        });
    }
    
    // Add cursor glow effect
    // const cursorGlow = document.querySelector('.cursor-glow');
    
    // if (cursorGlow) {
    //     document.addEventListener('mousemove', function(e) {
    //         cursorGlow.style.left = e.clientX + 'px';
    //         cursorGlow.style.top = e.clientY + 'px';
    //     });
    // }
    
    // Add active-border class to our-achievements for animated border effect
    // const achievementsSection = document.querySelector('.our-achievements');
    // if (achievementsSection) {
    //     achievementsSection.classList.add('active-border');
    // }
});




















// for team member

    
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 80);
        });
        
        // Cursor grow effect on hoverable elements
        const hoverables = document.querySelectorAll('.team-member, a, h2');
        
        hoverables.forEach(hoverable => {
            hoverable.addEventListener('mouseenter', () => {
                cursor.classList.add('grow');
                cursorFollower.classList.add('grow-follower');
            });
            
            hoverable.addEventListener('mouseleave', () => {
                cursor.classList.remove('grow');
                cursorFollower.classList.remove('grow-follower');
            });
        });
        
        // Animation on scroll
        document.addEventListener('DOMContentLoaded', () => {
            const teamMembers = document.querySelectorAll('.team-member');
            
            const fadeInOptions = {
                threshold: 0.3,
                rootMargin: "0px 0px -100px 0px"
            };
            
            const fadeInOnScroll = new IntersectionObserver((entries, fadeInOnScroll) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                        fadeInOnScroll.unobserve(entry.target);
                    }
                });
            }, fadeInOptions);
            
            teamMembers.forEach(member => {
                member.style.opacity = 0;
                member.style.transform = 'translateY(30px)';
                member.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                fadeInOnScroll.observe(member);
            });
        });
    










//for cursor 




// const cursos = document.querySelector(".custom-cursor");

// let hideTimeout;

// document.addEventListener("mousemove", (e) => {
//   cursos.style.left = `${e.clientX}px`;
//   cursos.style.top = `${e.clientY}px`;
//   cursos.style.opacity = "1";

//   clearTimeout(hideTimeout);
//   hideTimeout = setTimeout(() => {
//     cursos.style.opacity = "0";
//   }, 5000); // Hide after 1 second
// });

// document.addEventListener("mouseleave", () => {
//   cursos.style.opacity = "0";
// });

