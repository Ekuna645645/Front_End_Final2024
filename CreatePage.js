document.getElementById('NewsCreation').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('typeInTitle').value;
    const description = document.getElementById('typeInDesc').value;
    const category = document.getElementById('categorySelection').value;
    const editorFirstName = document.getElementById('editorFirstName').value;
    const editorLastName = document.getElementById('editorLastName').value;

    // Validation
    if (!title || !description || !category || !editorFirstName || !editorLastName) {
        alert('Please, fill in all the fields.');
        return;
    }

    const data = {
        title: title,
        description: description,
        category: category,
        editorFirstName: editorFirstName,
        editorLastName: editorLastName
    };

    fetch('https://btu-exam-cb6c3fdf3b9d.herokuapp.com/news', {
        method: 'POST',
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