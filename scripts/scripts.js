document.addEventListener('DOMContentLoaded', () => {
    // Function to handle document drafting
    const draftForm = document.getElementById('draftForm');
    const draftPreview = document.getElementById('draftPreview');

    if (draftForm) {
        draftForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(draftForm);
            const docType = formData.get('docType');
            const docDetails = formData.get('docDetails');

            // Generate a preview of the document
            draftPreview.innerHTML = `
                <h3>Document Preview</h3>
                <p><strong>Document Type:</strong> ${docType}</p>
                <p><strong>Details:</strong> ${docDetails}</p>
            `;
        });
    }

    // Function to handle document analysis with AI
    const analyzeForm = document.getElementById('analyzeForm');
    const analyzeResult = document.getElementById('analyzeResult');

    if (analyzeForm) {
        analyzeForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const fileInput = document.getElementById('fileInput').files[0];

            if (fileInput) {
                const reader = new FileReader();
                reader.onload = async function(event) {
                    const fileContent = event.target.result;

                    // Send document content to AI for analysis
                    try {
                        const response = await fetch('https://api.openai.com/v1/completions', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer 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'
                            },
                            body: JSON.stringify({ content: fileContent })
                        });
                        const result = await response.json();
                        
                        // Display the analysis result
                        analyzeResult.innerHTML = `
                            <h3>Analysis Result</h3>
                            <p><strong>Issues Found:</strong> ${result.issues || 'None'}</p>
                            <p><strong>Document Content:</strong><br><pre>${fileContent}</pre></p>
                        `;
                    } catch (error) {
                        analyzeResult.innerHTML = `
                            <h3>Analysis Result</h3>
                            <p>Error analyzing document: ${error.message}</p>
                        `;
                    }
                };
                reader.readAsText(fileInput);
            } else {
                analyzeResult.innerHTML = `
                    <h3>Analysis Result</h3>
                    <p>No file uploaded.</p>
                `;
            }
        });
    }

    // Function to handle legal research
    const researchForm = document.getElementById('researchForm');
    const researchResults = document.getElementById('researchResults');

    if (researchForm) {
        researchForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const query = document.getElementById('query').value;

            // Simulate a search for legal precedents
            researchResults.innerHTML = `
                <h3>Search Results</h3>
                <p><strong>Query:</strong> ${query}</p>
                <p>Results will be displayed here (This is a simulation).</p>
            `;
        });
    }

    // Function to update user dashboard
    const dashboard = document.getElementById('dashboardUpdates');
    
    if (dashboard) {
        setInterval(() => {
            const currentDate = new Date().toLocaleDateString();
            dashboard.innerHTML = `
                <h3>Dashboard</h3>
                <p><strong>Last Updated:</strong> ${currentDate}</p>
                <p><strong>Upcoming Deadlines:</strong> None (This is a simulation)</p>
            `;
        }, 60000); // Update every minute
    }

    // Function to handle section visibility
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    function showSection(id) {
        sections.forEach(section => {
            if (section.id === id) {
                section.classList.remove('hidden');
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
                section.classList.add('hidden');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Optionally, show the first section by default
    if (sections.length > 0) {
        showSection(sections[0].id);
    }

    // Animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
