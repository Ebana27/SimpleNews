const apikey = '32351db0105ee7c941fde1f81d0763f7';

document.querySelector('.search-nav button').addEventListener('click', () => {
    const query = document.getElementById('searchActu').value;
    if (query) {
        const url = `https://gnews.io/api/v4/search?q=${query}&lang=fr&country=fr&max=10&apikey=${apikey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const articles = data.articles;
                const resultApi = document.querySelector('.result-api');
                document.querySelector('.result').style.visibility= 'visible';
                for (let i = 0; i < 3; i++) {
                    if (articles[i]) {
                        document.getElementById(`result-title-${i + 1}`).textContent = articles[i].title;
                        document.getElementById(`result-description-${i + 1}`).textContent = articles[i].description;
                        document.getElementById(`result-link-${i + 1}`).href = articles[i].url;
                        document.getElementById(`result-link-${i + 1}`).style.display = 'block';
                        document.getElementById(`result-title-${i + 1}`).style.animation = "fadeIn";
                    } else {
                        document.getElementById(`result-title-${i + 1}`).textContent = 'Aucun article trouvé';
                        document.getElementById(`result-description-${i + 1}`).textContent = '';
                        document.getElementById(`result-link-${i + 1}`).style.display = 'none';
                    }
                }
                resultApi.style.display = 'flex';
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des nouvelles:', error);
                for (let i = 0; i < 3; i++) {
                    document.getElementById(`result-title-${i + 1}`).textContent = 'Erreur lors de la récupération des nouvelles';
                    document.getElementById(`result-description-${i + 1}`).textContent = 'Nous sommes vraiment désolé du désagrement causé :(';
                    document.getElementById(`result-link-${i + 1}`).style.display = 'none';
                }
            });
    }
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.network a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('This link is currently not active.');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const btnUp = document.querySelector('.btn-up');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnUp.classList.remove('hidden');
            document.getElementById(`result-title-${i + 1}`).style.animation = "fadeIn";
        } else {
            btnUp.classList.add('hidden');
        }
    });

    btnUp.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
