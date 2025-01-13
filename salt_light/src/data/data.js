import bcrypt from 'bcryptjs'

// FUNCTIONS

const util = (function (){

    function capitilizeText(text){
        return text.split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
    }

    function createChurch(id, name, denomination, location, position, contact, serviceTimes, services, websiteUrl,imgUrl, mission,type='churches') {
        return {
            id,
            name,
            denomination,
            location,
            position,
            contact,
            serviceTimes,
            services,
            websiteUrl,
            imgUrl,
            mission,
            type
        };
    }
    
   
    function createEvents(id, name, contact, location, services, mission, imgUrl,type='events') {
        return {
            id,
            name,
            contact,
            location,
            services,
            mission,
            imgUrl,
            type,
        };
    }

    function createDonationOption(id, title, description, amountOptions, imgUrl,type="donate") {
        const maxLength = 60; // Adjust this value to set the desired summary length
        const summary = description.length > maxLength
            ? description.slice(0, maxLength) + "..."
            : description;

        return {
            id,
            title,
            description,
            amountOptions, // Array of suggested donation amounts
            imgUrl,
            summary,
            type
        };
    }

    function createBlog(id, title, author, date, content, tags, imgUrl,type='blog') {
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
            type
        };
    }

    const createUser = (name, email, role, password) => {
        
        // Create a user object
        const user = {
            name,
            email,
            role,
            passwordHash: bcrypt.hashSync(password, 10), // Hash password
            createdAt: new Date(),
        };

        listingData.users.push(user)

    
    return {user};
};

    function formatMoney (amount,currency){
        const formatAmount = new Intl.NumberFormat(`en-ZA`,{
            style: 'currency',
            currency: `${currency}`,
            useGrouping: true,
            minimumFractionDigits:0,
            maximumFractionDigits:0,
        }).format(amount)
    
        return `${formatAmount}`
    }

    function randomIndex(index){
        return Math.floor(Math.random() * (index))
    }


    function getCount(arr){
        return arr.length
    }

    return {getCount,capitilizeText,createChurch,createEvents,createDonationOption,createBlog,formatMoney,createUser,randomIndex}
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
        util.createChurch( 1,  "Grace Community Church",  "Non-Denominational",  "123 Main Street, Springfield, IL",  {lat:39.7817, lng:-89.6501},  { email: "info@gracecommunity.com", phone: "555-123-4567" },  ["Sunday 9:00 AM", "Sunday 11:00 AM", "Wednesday 7:00 PM"],  ["Youth Ministry", "Bible Study", "Community Outreach"],  "https://www.gracecommunity.com", "/churches/churchA1.webp",  "A welcoming community church focused on spreading the Gospel and serving the local community.",),
 
        util.createChurch( 2, "Hope Chapel", "Non-Denominational",  "456 Elm Avenue, Greenville, SC",  {lat:26.5082, lng:31.3713},  { phone: "987-654-3210", email: "info@hopechapel.org" },  ["Sunday 9:00 AM", "Sunday 11:00 AM", "Wednesday 7:00 PM"], ["Morning Prayer", "Community Outreach", "Choir Practice"],  "https://www.gracecommunity.com", "/churches/churchB1.webp",  "To bring hope to the community through faith and service.",),

        util.createChurch(3, "Faith Life Center", "Non-Denominational",   "789 Pine Road, Austin, TX",  {lat:39.7817, lng:-89.6501},  { phone: "555-678-1234", email: "hello@faithlife.org" },  ["Sunday 9:00 AM", "Sunday 11:00 AM", "Wednesday 7:00 PM"],["Worship Services", "Children's Ministry", "Marriage Counseling"],  "https://www.gracecommunity.com", "/churches/churchC1.webp" ,  "To empower individuals to live a life of faith and purpose.",),

        util.createChurch( 4, "Light of the World Church",  "Non-Denominational",   "321 Oak Street, Miami, FL",  {lat:39.7817, lng:-89.6501},  { phone: "444-222-1111", email: "contact@lightworld.com" },  ["Sunday 9:00 AM", "Sunday 11:00 AM", "Wednesday 7:00 PM"],["Healing Services", "Discipleship Training", "Community Dinners"],  "https://www.gracecommunity.com",  "/churches/churchD1.webp" , "To be a beacon of light in the world, sharing God's love.",),
        
        util.createChurch(5, "Kingdom Fellowship",  "Non-Denominational",    "654 Cedar Lane, Denver, CO",  {lat:39.7817, lng:-89.6501},  { phone: "333-999-7777", email: "kingdom@fellowship.org" },  ["Sunday 9:00 AM", "Sunday 11:00 AM", "Wednesday 7:00 PM"],["Evening Worship", "Men's Fellowship", "Missionary Support"],  "https://www.gracecommunity.com", "/churches/churchE1.webp", "To build a strong, united community rooted in the Kingdom of God.",),

    ]

    let blog = [
        util.createBlog(
            1,
            "The Power of Prayer",
            "John Smith",
            "2024-12-15",
            "Prayer is the cornerstone of every believer's life. In this blog, we explore how prayer strengthens our relationship with God and transforms our lives.",
            ["Prayer", "Faith", "Spiritual Growth"],
            "/blog/blogB1.webp"
        ),
        util.createBlog(
            2,
            "Understanding Grace",
            "Jane Doe",
            "2024-12-10",
            "Grace is a gift freely given by God. Learn about the significance of grace in our daily walk and how it impacts our understanding of salvation.",
            ["Grace", "Salvation", "Christian Life"],
            "/blog/blogC1.webp"
        ),
        util.createBlog(
            3,
            "Living with Purpose",
            "Michael Johnson",
            "2024-11-30",
            "Discover what it means to live a purpose-driven life. This blog dives into biblical principles that guide us to find and fulfill our God-given purpose.",
            ["Purpose", "Biblical Living", "Christian Inspiration"],
            "/blog/blogA1.webp"
        ),
        util.createBlog(
            4,
            "The Role of Community in Faith",
            "Emily Brown",
            "2024-12-01",
            "Faith flourishes in community. Explore the importance of fellowship and how being part of a church strengthens your spiritual journey.",
            ["Community", "Fellowship", "Church Life"],
            "/blog/blogD1.webp"
        ),
        util.createBlog(
            5,
            "Overcoming Fear Through Faith",
            "Sarah Williams",
            "2024-12-05",
            "Fear is a common human experience, but faith in God can help us overcome it. This blog offers practical tips for trusting God in the face of fear.",
            ["Faith", "Fear", "Trust in God"],
            "/blog/blogE1.webp"
        )
    ];
        
    

    let donate = [
        util.createDonationOption(
            1,
            "Support the Mission",
            "Help us spread the Gospel of Jesus Christ by supporting our mission activities locally and globally.",
            [10, 25, 50, 100],
            "/donations/donateA1.webp"
        ),
        util.createDonationOption(
            2,
            "Sponsor a Child",
            "Your donation will provide essential needs like food, education, and healthcare for children in need.",
            [20, 50, 100, 200],
            "/donations/donateB1.webp"
        ),
        util.createDonationOption(
            3,
            "Build a Church",
            "Contribute to the construction of churches in underserved communities to provide a place of worship.",
            [50, 100, 500, 1000],
            "/donations/donateE1.webp"
        ),
        util.createDonationOption(
            4,
            "Bible Distribution",
            "Help us distribute Bibles to those who don't have access to the Word of God.",
            [5, 10, 25, 50],
            "/donations/donateD1.webp"
        ),
        util.createDonationOption(
            5,
            "Disaster Relief",
            "Support communities affected by natural disasters with relief supplies and recovery efforts.",
            [25, 50, 100, 250],
            "/donations/donateC1.webp"
        )
    ];
       

    let events = [

        util.createEvents( 1, "Youth Revival Conference", { phone: "123-456-7890", email: "events@gracechurch.com" }, "Grace Community Church, Springfield, IL", ["Worship Sessions", "Guest Speakers", "Prayer Workshops"], "To inspire the next generation to live with purpose and passion for God.", "/events/eventsA1.webp" ), 

        util.createEvents( 2, "Christmas Carol Night", { phone: "987-654-3210", email: "info@hopechapel.org" }, "Hope Chapel, Greenville, SC", ["Carol Singing", "Nativity Play", "Community Feast"], "Celebrating the joy and love of Christmas with the community.", "/events/eventsB1.webp" ), 

        util.createEvents( 3, "Faith Builders Workshop", { phone: "555-678-1234", email: "workshop@faithlife.org" }, "Faith Life Center, Austin, TX", ["Leadership Training", "Bible Study", "Team Building"], "Equipping individuals to lead and serve with strong faith and conviction.", "/events/eventsC1.webp" ), 

        util.createEvents( 4, "Healing & Deliverance Crusade", { phone: "444-222-1111", email: "events@lightworld.com" }, "Light of the World Church, Miami, FL", ["Healing Prayers", "Testimonies", "Intercessory Worship"], "Bringing hope and healing to the brokenhearted through the power of God.", "/events/eventsD1.webp" ), 

        util.createEvents( 5, "Community Outreach Day", { phone: "333-999-7777", email: "outreach@fellowship.org" }, "Kingdom Fellowship, Denver, CO", ["Food Drive", "Medical Checkups", "Clothing Donations"], "Serving the community with love and compassion to reflect Gods kingdom.", "/events/eventsE1.webp" ) ];

    
    let users = [
        {name:'jamiew',email:'hi@mail',role:'mail',password:'ji'},
    ]



    
    return {churches,blog,donate,events,users}

})()

const verses = (function(){
    const list = [
      "jer+29:11",
      "psa+23",
      "1cor+4:4-8",
      "php+4:13",
      "jhn+3:16",
      "rom+8:28",
      "isa+41:10",
      "psa+46:1",
      "gal+5:22-23",
      "heb+11:1",
      "2ti+1:7",
      "1cor+10:13",
      "pro+22:6",
      "isa+40:31",
      "jos+1:9",
      "heb+12:2",
      "mat+11:28",
      "rom+10:9-10",
      "php+2:3-4",
      "mat+5:43-44",
      "psa+27:1",
      "exo+14:14",
      "rom+12:2",
      "mat+6:33",
      "luk+1:37",
      "pro+3:5-6",
      "col+3:23",
      "psa+119:105",
      "jam+1:5",
      "jhn+14:6",
      "rom+15:13",
      "1cor+13:4-7",
      "1pet+5:7",
      "isa+43:2",
      "mat+28:19-20",
      "psa+91:1-2",
      "jhn+16:33",
      "pro+18:10",
      "2cor+5:17",
      "rom+6:23",
      "php+1:6",
      "mat+22:37-39",
      "psa+34:8",
      "gal+2:20",
      "heb+13:5",
      "isa+26:3",
      "psa+19:14",
      "rom+3:23",
      "2tim+3:16",
      "luk+6:31",
      "1jn+4:19",
      "pro+17:22",
      "psa+37:4",
      "psa+51:10",
      "mic+6:8",
      "jhn+10:10",
      "rom+8:38-39",
      "deut+31:6",
      "1cor+15:58",
      "pro+4:23",
      "2cor+12:9",
      "jam+4:8",
      "heb+4:16",
      "psa+62:1-2",
      "rom+5:8",
      "jhn+15:5",
      "lam+3:22-23",
      "mat+7:7-8",
      "psa+103:12",
      "1pet+2:24",
      "rev+3:20",
      "rom+12:1",
      "psa+145:18",
      "jhn+8:12",
      "mat+5:14-16",
      "2cor+1:3-4",
      "jam+1:2-3",
      "psa+9:9-10",
      "rom+1:16",
      "jhn+17:3",
      "1cor+2:9",
      "pro+16:9",
      "psa+46:10",
      "col+2:6-7",
      "heb+10:23",
      "luk+12:32",
      "jhn+11:25-26",
      "rom+8:1",
      "mat+16:24",
      "psa+73:26",
      "isa+55:6",
      "1thes+5:16-18",
      "pro+15:1",
      "psa+63:1",
      "jhn+6:35",
      "php+3:14",
      "psa+121:1-2",
      "isa+12:2",
      "rom+14:8",
      "pro+10:12",
      "heb+6:19",
      "mat+18:20",
      "psa+27:14",
      "col+3:12",
      "luk+9:23",
      "1jn+3:16",
      "jhn+4:24",
      "rom+11:36",
      "psa+32:8",
      "pro+13:20",
      "rom+5:3-5",
      "1tim+6:12",
      "mat+4:19",
      "psa+28:7",
      "jhn+14:27",
      "pro+27:17",
      "isa+1:18",
      "rom+13:10",
      "1cor+1:9",
      "jam+5:16",
      "mat+25:40",
      "psa+84:11",
      "rom+8:26",
      "isa+61:1",
      "jhn+3:36",
      "psa+34:18",
      "rom+14:17",
      "pro+21:3",
      "mat+9:37-38",
      "psa+40:8",
      "heb+13:8",
      "rom+4:20-21",
      "1jn+5:14",
      "jhn+1:12",
      "psa+16:8",
      "isa+25:1",
      "pro+11:25",
      "mat+5:8",
      "jhn+15:13",
      "rom+8:18",
      "1pet+3:15",
      "psa+33:4",
      "luk+2:10-11",
      "mat+19:26",
      "rom+13:1",
      "psa+30:5",
      "jhn+5:24",
      "1cor+3:16",
      "rom+6:4",
      "jhn+15:11",
      "psa+18:1-2",
      "1cor+12:27",
      "rom+8:15",
      "jhn+6:68",
      "psa+50:15",
      "isa+58:11",
      "rom+3:24",
      "1cor+2:4-5",
      "luk+10:27",
      "rom+5:9-10",
      "jhn+12:46",
      "psa+63:7",
      "rom+7:18",
      "pro+21:21",
      "jhn+5:39",
      "psa+1:1-3",
      "luk+14:11",
      "rom+8:11",
      "1cor+15:21-22",
      "jhn+13:35",
      "psa+23:4",
      "rom+11:33",
      "mat+28:18",
      "psa+118:24",
      "isa+9:6",
      "luk+6:38",
      "1tim+2:5",
      "rom+12:21",
      "psa+18:30",
      "heb+10:24-25",
      "jhn+7:38",
      "isa+40:8",
      "mat+5:9",
      "psa+126:5",
      "rom+10:13",
      "1cor+13:13",
      "jhn+17:20-21",
      "psa+27:3",
      "isa+60:1",
      "luk+19:10",
      "rom+8:37",
      "psa+145:9",
      "mat+11:29",
      "psa+119:11",
      "rom+5:1",
      "1cor+14:33",
      "jhn+14:15",
      "isa+49:16",
      "luk+15:7",
      "rom+12:10",
      "psa+46:5",
      "heb+11:6",
      "jhn+14:21",
      "isa+43:1",
      "psa+145:13",
      "rom+6:14",
      "1cor+10:31",
      "jhn+8:31-32",
      "isa+41:13",
      "luk+23:43",
      "rom+11:36",
      "psa+91:11",
      "heb+10:23",
      "jhn+3:36",
      "isa+6:8",
      "luk+18:27",
      "rom+8:6",
      "psa+37:5",
      "mat+18:20",
      "luk+11:9",
      "rom+5:6",
      "psa+95:1-2",
      "isa+53:5",
      "luk+6:45",
      "rom+1:20",
      "psa+103:8-10",
      "mat+5:44",
      "psa+147:3",
      "rom+12:19",
      "psa+107:1",
      "luk+9:24",
      "rom+15:4",
      "psa+42:11",
      "mat+10:30-31",
      "psa+68:19",
      "luk+12:7",
      "rom+4:7",
      "psa+18:2",
      "isa+40:28",
      "luk+19:10",
      "rom+8:28",
      "psa+3:3",
      "mat+22:37-38",
      "isa+55:11",
      "luk+9:62",
      "rom+6:23",
      "psa+150:6",
      "mat+5:16",
      "psa+145:18",
      "rom+3:23",
      "psa+27:1",
      "mat+6:19-21",
      "isa+55:3",
      "luk+10:27",
      "rom+10:17",
      "psa+19:1",
      "jhn+5:24",
      "luk+6:45",
      "isa+26:4",
      "rom+14:8",
      "psa+119:105",
      "mat+16:26",
      "isa+53:6",
      "rom+8:14",
      "psa+18:32",
      "mat+5:3",
      "jhn+14:27",
      "psa+139:14",
      "luk+12:22-23",
      "rom+6:11",
      "psa+9:10",
      "isa+40:29",
      "luk+22:42",
      "rom+12:2",
      "psa+46:1",
      "jhn+10:10",
      "luk+1:37",
      "psa+100:4",
      "rom+8:32",
      "isa+61:10",
      "luk+12:6",]

    return {list}
})()

export {listingData,util,pages,verses}

//////////////////////////////////////





