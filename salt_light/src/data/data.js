// FUNCTIONS

const util = (function (){

    function capitilizeText(text){
        return text.split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
    }

    function createChurch(id,name,contact,location,services,mission){
        return {
            id,
            name,
            contact,
            location,
            services,
            mission,
        }
    }
    
   
    function createEvents(id,name,contact,location,services,mission){
        return {
            id,
            name,
            contact,
            location,
            services,
            mission,
        }
    }

    function createDonationOption(id, title, description, amountOptions, imgUrl) {
        return {
            id,
            title,
            description,
            amountOptions, // Array of suggested donation amounts
            imgUrl,
        };
    }

    function createBlog(id, title, author, date, content, tags, imgUrl) {
        const maxLength = 100; // Adjust this value to set the desired summary length
        const summary = content.length > maxLength
            ? content.slice(0, maxLength) + "..."
            : content;
    
        return {
            id,
            title,
            author,
            date,
            summary,
            content,
            tags,
            imgUrl,
        };
    }

    return {capitilizeText,createChurch,createEvents,createDonationOption,createBlog}
})()


// DATA :

// WEBSITE PAGES
const pages = (function(){
    const pagesData = [
        { id: 0, name: 'churches' },
        { id: 1, name: 'events' },
        { id: 2, name: 'blog' },
        { id: 3, name: 'donate'},
    ]

    return {pagesData}
})()

// LISTING INFORMATION 
const listingData = (function(){
    let churches = [

        util.createChurch( 1, "Grace Community Church", { phone: "123-456-7890", email: "contact@gracechurch.com" }, "123 Main Street, Springfield, IL", ["Sunday Service", "Youth Ministry", "Bible Study"], "To spread the gospel and nurture spiritual growth.", "/images/churches/grace-community-church.jpg" ), 
        
        util.createChurch( 2, "Hope Chapel", { phone: "987-654-3210", email: "info@hopechapel.org" }, "456 Elm Avenue, Greenville, SC", ["Morning Prayer", "Community Outreach", "Choir Practice"], "To bring hope to the community through faith and service.", "/images/churches/hope-chapel.jpg" ), 
        
        util.createChurch( 3, "Faith Life Center", { phone: "555-678-1234", email: "hello@faithlife.org" }, "789 Pine Road, Austin, TX", ["Worship Services", "Children's Ministry", "Marriage Counseling"], "To empower individuals to live a life of faith and purpose.", "/images/churches/faith-life-center.jpg" ), 
        
        util.createChurch( 4, "Light of the World Church", { phone: "444-222-1111", email: "contact@lightworld.com" }, "321 Oak Street, Miami, FL", ["Healing Services", "Discipleship Training", "Community Dinners"], "To be a beacon of light in the world, sharing God's love.", "/images/churches/light-of-the-world-church.jpg" ), 
        
        util.createChurch( 5, "Kingdom Fellowship", { phone: "333-999-7777", email: "kingdom@fellowship.org" }, "654 Cedar Lane, Denver, CO", ["Evening Worship", "Men's Fellowship", "Missionary Support"], "To build a strong, united community rooted in the Kingdom of God.", "/images/churches/kingdom-fellowship.jpg" ) 
       
    ]

    let blog = [
        util.createBlog(
            1,
            "The Power of Prayer",
            "John Smith",
            "2024-12-15",
            "Prayer is the cornerstone of every believer's life. In this blog, we explore how prayer strengthens our relationship with God and transforms our lives.",
            ["Prayer", "Faith", "Spiritual Growth"],
            "/images/blogs/power-of-prayer.jpg"
        ),
        util.createBlog(
            2,
            "Understanding Grace",
            "Jane Doe",
            "2024-12-10",
            "Grace is a gift freely given by God. Learn about the significance of grace in our daily walk and how it impacts our understanding of salvation.",
            ["Grace", "Salvation", "Christian Life"],
            "/images/blogs/understanding-grace.jpg"
        ),
        util.createBlog(
            3,
            "Living with Purpose",
            "Michael Johnson",
            "2024-11-30",
            "Discover what it means to live a purpose-driven life. This blog dives into biblical principles that guide us to find and fulfill our God-given purpose.",
            ["Purpose", "Biblical Living", "Christian Inspiration"],
            "/images/blogs/living-with-purpose.jpg"
        ),
        util.createBlog(
            4,
            "The Role of Community in Faith",
            "Emily Brown",
            "2024-12-01",
            "Faith flourishes in community. Explore the importance of fellowship and how being part of a church strengthens your spiritual journey.",
            ["Community", "Fellowship", "Church Life"],
            "/images/blogs/role-of-community.jpg"
        ),
        util.createBlog(
            5,
            "Overcoming Fear Through Faith",
            "Sarah Williams",
            "2024-12-05",
            "Fear is a common human experience, but faith in God can help us overcome it. This blog offers practical tips for trusting God in the face of fear.",
            ["Faith", "Fear", "Trust in God"],
            "/images/blogs/overcoming-fear.jpg"
        )
    ];
        
    

    let donate = [
        util.createDonationOption(
            1,
            "Support the Mission",
            "Help us spread the Gospel of Jesus Christ by supporting our mission activities locally and globally.",
            [10, 25, 50, 100],
            "/images/donations/support-mission.jpg"
        ),
        util.createDonationOption(
            2,
            "Sponsor a Child",
            "Your donation will provide essential needs like food, education, and healthcare for children in need.",
            [20, 50, 100, 200],
            "/images/donations/sponsor-child.jpg"
        ),
        util.createDonationOption(
            3,
            "Build a Church",
            "Contribute to the construction of churches in underserved communities to provide a place of worship.",
            [50, 100, 500, 1000],
            "/images/donations/build-church.jpg"
        ),
        util.createDonationOption(
            4,
            "Bible Distribution",
            "Help us distribute Bibles to those who don't have access to the Word of God.",
            [5, 10, 25, 50],
            "/images/donations/bible-distribution.jpg"
        ),
        util.createDonationOption(
            5,
            "Disaster Relief",
            "Support communities affected by natural disasters with relief supplies and recovery efforts.",
            [25, 50, 100, 250],
            "/images/donations/disaster-relief.jpg"
        )
    ];
       

    let events = [

        util.createEvents( 1, "Youth Revival Conference", { phone: "123-456-7890", email: "events@gracechurch.com" }, "Grace Community Church, Springfield, IL", ["Worship Sessions", "Guest Speakers", "Prayer Workshops"], "To inspire the next generation to live with purpose and passion for God.", "/images/events/youth-revival-conference.jpg" ), 

        util.createEvents( 2, "Christmas Carol Night", { phone: "987-654-3210", email: "info@hopechapel.org" }, "Hope Chapel, Greenville, SC", ["Carol Singing", "Nativity Play", "Community Feast"], "Celebrating the joy and love of Christmas with the community.", "/images/events/christmas-carol-night.jpg" ), 

        util.createEvents( 3, "Faith Builders Workshop", { phone: "555-678-1234", email: "workshop@faithlife.org" }, "Faith Life Center, Austin, TX", ["Leadership Training", "Bible Study", "Team Building"], "Equipping individuals to lead and serve with strong faith and conviction.", "/images/events/faith-builders-workshop.jpg" ), 

        util.createEvents( 4, "Healing & Deliverance Crusade", { phone: "444-222-1111", email: "events@lightworld.com" }, "Light of the World Church, Miami, FL", ["Healing Prayers", "Testimonies", "Intercessory Worship"], "Bringing hope and healing to the brokenhearted through the power of God.", "/images/events/healing-crusade.jpg" ), 

        util.createEvents( 5, "Community Outreach Day", { phone: "333-999-7777", email: "outreach@fellowship.org" }, "Kingdom Fellowship, Denver, CO", ["Food Drive", "Medical Checkups", "Clothing Donations"], "Serving the community with love and compassion to reflect Gods kingdom.", "/images/events/community-outreach-day.jpg" ) ];


    return {churches,blog,donate,events}

})()



export {listingData,util,pages}