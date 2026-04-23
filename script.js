const { useEffect, useRef } = React;

function App() {
    const chartRef = useRef(null);

    useEffect(() => {
        // Inicializar AOS
        AOS.init();

        // Crear gráfica con Chart.js
        const ctx = chartRef.current.getContext('2d');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['2018', '2020', '2022', '2024'],
                datasets: [{
                    label: 'Pobreza en México (%)',
                    data: [41.9, 43.9, 36.3, 35],
                    backgroundColor: 'rgba(231, 76, 60, 0.7)'
                }]
            },
            options: {
                responsive: true
            }
        });

        // Crear mapa con Leaflet
        const map = L.map('map').setView([23.6345, -102.5528], 5);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap'
        }).addTo(map);

        // Marcador ejemplo
        L.marker([19.4326, -99.1332]).addTo(map)
            .bindPopup('Ciudad de México: Alta densidad poblacional')
            .openPopup();

    }, []);

    return (
        <div>
            <header>
                <h1>Pobreza, Educación y Cambio Climático</h1>
            </header>

            <section>
                <div className="card" data-aos="fade-up">
                    <h2>Gráfica de pobreza</h2>
                    <canvas ref={chartRef}></canvas>
                </div>

                <div className="card" data-aos="fade-right">
                    <h2>Mapa interactivo</h2>
                    <div id="map"></div>
                </div>

                <div className="card" data-aos="zoom-in">
                    <h2>Impacto del cambio climático</h2>
                    <p>
                        El cambio climático afecta más a comunidades vulnerables,
                        incrementando la pobreza y reduciendo el acceso a recursos básicos.
                    </p>
                </div>
            </section>
        </div>
    );
}

// Renderizar React
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
