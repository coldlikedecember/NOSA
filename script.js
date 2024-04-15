// document.addEventListener("DOMContentLoaded", function () {
//     const serviceBoxes = document.querySelectorAll(".service-box");

//     serviceBoxes.forEach(function (box) {
//         const title = box.textContent.trim(); // Extract the title from the box
//         let info = ""; // Initialize the info variable
        
//         // Set the info variable based on the title
//         switch (title) {
//             case "Marketing":
//                 info = "Marketing involves promoting and selling products or services.";
//                 break;
//             case "Web Development":
//                 info = "Web development focuses on building and maintaining websites.";
//                 break;
//             case "SEO":
//                 info = "SEO (Search Engine Optimization) helps websites rank higher in search engine results.";
//                 break;
//             case "Advertisement":
//                 info = "Advertisement involves promoting products or services through various channels.";
//                 break;
//             case "Social Media Handeling":
//                 info = "Social media handling involves managing social media accounts and engaging with followers.";
//                 break;
//             case "Content Marketing":
//                 info = "Content marketing involves creating and sharing valuable content to attract and retain customers.";
//                 break;
//             case "Pay-Per-Click advertising":
//                 info = "Pay-Per-Click advertising is an online advertising model where advertisers pay a fee each time their ad is clicked.";
//                 break;
//             case "Influencer Marketing":
//                 info = "Influencer marketing involves collaborating with influential individuals to promote products or services.";
//                 break;
//             default:
//                 info = "Additional information not available.";
//         }

//         // Add event listeners for mouseover and mouseout
//         box.addEventListener("mouseover", function () {
//             this.innerHTML = "<div class='service-content'><div class='image' style='background-image: url(" + box.style.backgroundImage.slice(4, -1) + ");'></div><div class='info'><h3>" + title + "</h3><p>" + info + "</p></div></div>";
//             this.classList.add("expanded");
//         });

//         box.addEventListener("mouseout", function () {
//             this.innerHTML = "<center>" + title + "</center>";
//             this.classList.remove("expanded");
//         });
//     });
// });
