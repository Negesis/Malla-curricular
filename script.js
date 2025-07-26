// --- Evento que se ejecuta cuando el contenido del HTML ha sido cargado ---
document.addEventListener('DOMContentLoaded', () => {

    // --- Definición de los Datos de la Malla Curricular ---
    // Cada ramo es un objeto con id, nombre, semestre y una lista de requisitos.
    // El 'id' es un identificador único y es crucial para el sistema de requisitos.
    const ramos = [
        // Semestre 1
        { id: 'intro-fonoaudiologia', nombre: 'Introducción a la fonoaudiología', semestre: 1, requisitos: [] },
        { id: 'atencion-urgencia', nombre: 'Atención básica de urgencia', semestre: 1, requisitos: [] },
        { id: 'taller-competencias-aprendizaje', nombre: 'Taller de competencias para el aprendizaje', semestre: 1, requisitos: [] },
        { id: 'razonamiento-logico', nombre: 'Razonamiento lógico matemático', semestre: 1, requisitos: [] },
        { id: 'principios-biologia', nombre: 'Principios de la biología', semestre: 1, requisitos: [] },
        { id: 'taller-competencias-comunicativas', nombre: 'Taller de competencias comunicativas', semestre: 1, requisitos: [] },

        // Semestre 2
        { id: 'comunicacion-linguistica', nombre: 'Comunicación y lingüística', semestre: 2, requisitos: [] },
        { id: 'salud-sociedad', nombre: 'Saludos y sociedad', semestre: 2, requisitos: [] },
        { id: 'anatomia-fisiologia', nombre: 'Anatomía y fisiología general', semestre: 2, requisitos: ['principios-biologia'] },
        { id: 'procesos-cognitivos', nombre: 'Procesos cognitivos y desarrollo en el curso de vida', semestre: 2, requisitos: [] },
        { id: 'acustica-biomecanica', nombre: 'Acústica y biomecánica', semestre: 2, requisitos: ['razonamiento-logico'] },
        { id: 'cultura-valores', nombre: 'Cultura y valores', semestre: 2, requisitos: [] },

        // Semestre 3
        { id: 'estadistica-epidemiologia', nombre: 'Estadística y Epidemiología en Fonoaudiología', semestre: 3, requisitos: [] },
        { id: 'significado-estructuras-lenguaje', nombre: 'Significado y Estructuras del Lenguaje', semestre: 3, requisitos: ['comunicacion-linguistica'] },
        { id: 'neuropsiquiatria', nombre: 'Neuropsiquiatría', semestre: 3, requisitos: [] },
        { id: 'bases-morfofuncionales', nombre: 'Bases Morfofuncionales de la Fonoaudiología', semestre: 3, requisitos: ['anatomia-fisiologia'] },
        { id: 'persona-sentido', nombre: 'Persona y Sentido', semestre: 3, requisitos: ['cultura-valores'] },
        { id: 'taller-desarrollo-1', nombre: 'Taller de Desarrollo Personal I', semestre: 3, requisitos: [] },
        { id: 'ingles-1', nombre: 'Inglés Básico I', semestre: 3, requisitos: [] },

        // Semestre 4
        { id: 'lenguaje-sociedad', nombre: 'Lenguaje y Sociedad', semestre: 4, requisitos: ['significado-estructuras-lenguaje'] },
        { id: 'fonoestomatologia', nombre: 'Fonoestomatología', semestre: 4, requisitos: [] },
        { id: 'fisiopatologia-comunicacion', nombre: 'Fisiopatología de la Comunicación', semestre: 4, requisitos: [] },
        { id: 'evaluacion-participativa', nombre: 'Evaluación Participativa con la Comunidad', semestre: 4, requisitos: [] },
        { id: 'taller-desarrollo-2', nombre: 'Taller de Desarrollo Personal II', semestre: 4, requisitos: ['taller-desarrollo-1'] },
        { id: 'ingles-2', nombre: 'Inglés Básico II', semestre: 4, requisitos: ['ingles-1'] },

        // Semestre 5
        { id: 'abordaje-comunidad-educativa', nombre: 'Abordaje Fonoaudiológico en la Comunidad Educativa', semestre: 5, requisitos: ['lenguaje-sociedad'] },
        { id: 'desarrollo-nna', nombre: 'Desarrollo en Niños Niñas y Adolescentes', semestre: 5, requisitos: [] },
        { id: 'desarrollo-adulto', nombre: 'Desarrollo en el Adulto y Personas Mayores', semestre: 5, requisitos: [] },
        { id: 'valoracion-auditiva-1', nombre: 'Valoración Auditiva en el Curso de Vida I', semestre: 5, requisitos: [] },
        { id: 'intervencion-comunitaria', nombre: 'Intervención Comunitaria', semestre: 5, requisitos: ['evaluacion-participativa'] },
        { id: 'etica-salud', nombre: 'Ética en Salud', semestre: 5, requisitos: [] },

        // Semestre 6
        { id: 'bases-rehabilitacion', nombre: 'Bases de la Rehabilitación y Redes Integradas de Servicio de Salud', semestre: 6, requisitos: [] },
        { id: 'abordaje-nna-1', nombre: 'Abordaje en Niños Niñas y Adolescentes I', semestre: 6, requisitos: ['desarrollo-nna'] },
        { id: 'abordaje-adulto-1', nombre: 'Abordaje en Adultos y Personas Mayores I', semestre: 6, requisitos: ['desarrollo-adulto'] },
        { id: 'valoracion-auditiva-2', nombre: 'Valoración Auditiva en el Curso de Vida II', semestre: 6, requisitos: ['valoracion-auditiva-1'] },
        { id: 'gestion-innovacion', nombre: 'Gestión e Innovación en Fonoaudiología', semestre: 6, requisitos: [] },
        { id: 'desarrollo-voz', nombre: 'Desarrollo de la Voz y Técnica Vocal', semestre: 6, requisitos: [] },
        { id: 'electivo-1', nombre: 'Electivo I', semestre: 6, requisitos: [] },

        // Semestre 7
        { id: 'abordaje-nna-2', nombre: 'Abordaje en Niños Niñas y Adolescentes II', semestre: 7, requisitos: ['abordaje-nna-1'] },
        { id: 'abordaje-adulto-2', nombre: 'Abordaje en Adultos y Personas Mayores II', semestre: 7, requisitos: ['abordaje-adulto-1'] },
        { id: 'abordaje-auditivo', nombre: 'Abordaje Auditivo en el Curso de Vida', semestre: 7, requisitos: ['valoracion-auditiva-2'] },
        { id: 'electivo-2', nombre: 'Electivo II', semestre: 7, requisitos: ['electivo-1'] },
        { id: 'abordaje-voz-1', nombre: 'Abordaje de la Voz Hablada y Cantada I', semestre: 7, requisitos: ['desarrollo-voz'] },
        { id: 'practica-1', nombre: 'Práctica Curricular I', semestre: 7, requisitos: [] },

        // Semestre 8
        { id: 'abordaje-deglucion', nombre: 'Abordaje de la Deglución y Alimentación Oral', semestre: 8, requisitos: [] },
        { id: 'electivo-3', nombre: 'Electivo III', semestre: 8, requisitos: ['electivo-2'] },
        { id: 'abordaje-vestibular', nombre: 'Abordaje Vestibular en el Curso de Vida', semestre: 8, requisitos: ['abordaje-auditivo'] },
        { id: 'metodologia-investigacion', nombre: 'Metodología de la Investigación', semestre: 8, requisitos: [] },
        { id: 'abordaje-voz-2', nombre: 'Abordaje de la Voz Hablada y Cantada II', semestre: 8, requisitos: ['abordaje-voz-1'] },
        { id: 'practica-2', nombre: 'Práctica Curricular II', semestre: 8, requisitos: ['practica-1'] },

        // Semestre 9
        { id: 'seminario-grado-1', nombre: 'Seminario de Grado I', semestre: 9, requisitos: [] },
        { id: 'internado-1', nombre: 'Internado Profesional I', semestre: 9, requisitos: [] },
        { id: 'internado-2', nombre: 'Internado Profesional II', semestre: 9, requisitos: ['internado-1'] },

        // Semestre 10
        { id: 'seminario-grado-2', nombre: 'Seminario de Grado II', semestre: 10, requisitos: ['seminario-grado-1'] },
        { id: 'internado-3', nombre: 'Internado Profesional III', semestre: 10, requisitos: ['internado-2'] },
        { id: 'internado-4', nombre: 'Internado Profesional IV', semestre: 10, requisitos: ['internado-3'] },
    ];

    // --- Estado de la Aplicación ---
    const container = document.getElementById('malla-curricular-container');
    // Carga los ramos aprobados desde localStorage o inicializa un Set vacío.
    // Usamos un Set para un manejo más eficiente de los datos (agregar, eliminar, buscar).
    let ramosAprobados = new Set(JSON.parse(localStorage.getItem('ramosAprobadosFono')) || []);

    // --- Funciones Principales ---

    /**
     * Guarda el estado actual de los ramos aprobados en el localStorage del navegador.
     */
    const guardarEstado = () => {
        localStorage.setItem('ramosAprobadosFono', JSON.stringify(Array.from(ramosAprobados)));
    };

    /**
     * Verifica si todos los requisitos de un ramo están cumplidos.
     * @param {object} ramo - El objeto del ramo a verificar.
     * @returns {boolean} - True si los requisitos están cumplidos, false en caso contrario.
     */
    const requisitosCumplidos = (ramo) => {
        return ramo.requisitos.every(reqId => ramosAprobados.has(reqId));
    };

    /**
     * Dibuja o actualiza toda la malla curricular en la página.
     * Limpia el contenedor y vuelve a generar todo desde cero.
     */
    const dibujarMalla = () => {
        container.innerHTML = ''; // Limpia la malla existente para redibujar
        const totalSemestres = Math.max(...ramos.map(r => r.semestre));

        for (let i = 1; i <= totalSemestres; i++) {
            const semestreColumna = document.createElement('div');
            semestreColumna.className = 'semestre-columna';

            const titulo = document.createElement('h2');
            titulo.className = 'semestre-titulo';
            titulo.textContent = `Semestre ${i}`;
            semestreColumna.appendChild(titulo);

            const ramosDelSemestre = ramos.filter(ramo => ramo.semestre === i);

            ramosDelSemestre.forEach(ramo => {
                const ramoDiv = document.createElement('div');
                ramoDiv.className = 'ramo';
                ramoDiv.textContent = ramo.nombre;
                ramoDiv.dataset.id = ramo.id; // Asigna el id del ramo al elemento HTML

                // Aplicar clases CSS según el estado del ramo
                if (ramosAprobados.has(ramo.id)) {
                    ramoDiv.classList.add('aprobado');
                } else if (!requisitosCumplidos(ramo)) {
                    ramoDiv.classList.add('bloqueado');
                }

                semestreColumna.appendChild(ramoDiv);
            });

            container.appendChild(semestreColumna);
        }
    };

    /**
     * Maneja el evento de clic sobre un ramo.
     * @param {Event} e - El objeto del evento de clic.
     */
    const manejarClickRamo = (e) => {
        const target = e.target;
        if (!target.classList.contains('ramo')) return; // Salir si no se hizo clic en un ramo

        const ramoId = target.dataset.id;
        const ramo = ramos.find(r => r.id === ramoId);

        if (!ramo) return;

        // Si el ramo ya está aprobado, permitir "des-aprobarlo"
        if (ramosAprobados.has(ramoId)) {
            ramosAprobados.delete(ramoId);
        } 
        // Si el ramo no está aprobado
        else {
            // Verificar si los requisitos se cumplen
            if (requisitosCumplidos(ramo)) {
                ramosAprobados.add(ramoId);
            } else {
                // Si no se cumplen, mostrar una alerta con los ramos que faltan
                const requisitosFaltantes = ramo.requisitos
                    .filter(reqId => !ramosAprobados.has(reqId))
                    .map(reqId => ramos.find(r => r.id === reqId).nombre);
                
                alert(`Para tomar este ramo, primero debes aprobar:\n\n- ${requisitosFaltantes.join('\n- ')}`);
                return; // Detener la ejecución para no redibujar innecesariamente
            }
        }
        
        // Guardar el nuevo estado y redibujar la malla para reflejar los cambios
        guardarEstado();
        dibujarMalla();
    };


    // --- Inicialización ---
    dibujarMalla(); // Dibuja la malla por primera vez al cargar la página.
    container.addEventListener('click', manejarClickRamo); // Añade el listener de clics al contenedor principal.

});
