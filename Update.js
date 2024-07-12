const urlParams = new URLSearchParams(window.location.search);
        const newsId = urlParams.get('id');

        if (newsId) {
            fetch(`https://btu-exam-cb6c3fdf3b9d.herokuapp.com/news/${newsId}`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById('typeInTitle').value = data.title;
                    document.getElementById('typeInDesc').value = data.description;
                    document.getElementById('categorySelection').value = data.category;
                    document.getElementById('editorFirstName').value = data.editorFirstName;
                    document.getElementById('editorLastName').value = data.editorLastName;
                });
        }

        document.getElementById('NewsUpdate').addEventListener('submit', function(event) {
            event.preventDefault();

            const title = document.getElementById('typeInTitle').value;
            const description = document.getElementById('typeInDesc').value;
            const category = document.getElementById('categorySelection').value;
            const editorFirstName = document.getElementById('editorFirstName').value;
            const editorLastName = document.getElementById('editorLastName').value;

            // Validaciaa
            if (!title || !description || !category || !editorFirstName || !editorLastName) {
                alert('Please fill out all fields.');
                return;
            }

            const data = {
                title: title,
                description: description,
                category: category,
                editorFirstName: editorFirstName,
                editorLastName: editorLastName
            };

            fetch(`https://btu-exam-cb6c3fdf3b9d.herokuapp.com/news/${newsId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                window.history.back(); 
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        });