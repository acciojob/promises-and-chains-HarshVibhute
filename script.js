let form = document.getElementById("form");
        let age = document.getElementById("age");
        let name = document.getElementById("name");

        form.addEventListener("submit", function(event) {

            event.preventDefault();

            if (age.value === "" || name.value === "") {
                alert("Please enter valid details.");
                return;
            }

            let promise = new Promise(function(resolve, reject) {

                setTimeout(function() {

                    if (Number(age.value) > 18) {
                        resolve();
                    } else {
                        reject();
                    }

                }, 4000);

            });

            promise
                .then(function() {
                    alert("Welcome, " + name.value + ". You can vote.");
                })
                .catch(function() {
                    alert("Oh sorry " + name.value + ". You aren't old enough.");
                });
		});
