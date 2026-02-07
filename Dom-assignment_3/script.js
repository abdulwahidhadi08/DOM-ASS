 
        /* =========================
           Task 1: Get attribute value
        ========================== */
        const image = document.querySelector("#myImage");
        const imageSrc = image.getAttribute("src");
        console.log("Image src:", imageSrc);

        /* =========================
           Task 2: Change image source
        ========================== */
        function changeImage() {
            image.setAttribute("src", "https://via.placeholder.com/200/0000FF");
        }

        /* =========================
           Task 3: Set attribute to input
        ========================== */
        const input = document.querySelector("#nameInput");
        input.setAttribute("placeholder", "Enter your name");
       function enableInput() {
            const input = document.getElementById("disabledInput");
            input.removeAttribute("disabled");
        }

        /* =========================
           Task 5: Check attribute exists
        ========================== */
        const para = document.getElementById("myPara");
        const hasClass = para.hasAttribute("class");
        console.log("Paragraph has class attribute:", hasClass);

        /* =========================
           Task 6: Change link destination
        ========================== */
        function changeLink() {
            const link = document.getElementById("myLink");
            link.setAttribute("href", "https://www.wikipedia.org");
            link.textContent = "Go to Wikipedia";
        }