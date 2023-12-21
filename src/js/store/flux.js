const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			preguntas: [
				{
					1: "Seleccione la respuesta que no corresponde con los requisitos que debemos tener en cuenta a la hora de escuchar:",
					Respuestas: [
						{ A: "Suspender todo tipo de juicio o prejuicio sobre la persona que nos está hablando.", correct: false },
						{ B: "Adoptar una actitud empática.", correct: false },
						{ C: "Todas las respuestas de los pacientes necesitan una retroalimentación verbal.", correct: true },
						{ D: "Respeto o aceptación incondicional de la persona.", correct: false },
					],
				},
				{
					2: "El estilo de comunicación recomendado en las relaciones con los pacientes es:",
					Respuestas: [
						{ A: "Paternalista.", correct: false },
						{ B: "Asertivo.", correct: true },
						{ C: "Agresivo.", correct: false },
						{ D: "Pasivo.", correct: false },
					],
				},
				{
					3: "¿Qué es la asertividad?",
					Respuestas: [
						{ A: "Elevar el tono de voz en comunicación, para apoyar lo que se dice.", correct: false },
						{ B: "Capacidad de defender los propios pensamientos y sentimientos, sin vulnerar los derechos de los demás.", correct: true },
						{ C: "Negar con la cabeza lo que el otro dice, cuando estamos seguros de que no es verdad.", correct: false },
						{ D: "Dar siempre la razón al otro, para evitar conflictos.", correct: false },
					],
				},
				{
					4: "¿Cómo debe comunicarse el/la celador/a con el paciente y su familia?",
					Respuestas: [
						{ A: "Utilizando términos técnicos para dar una información adecuada.", correct: false },
						{ B: "Evitando usar un lenguaje amigable.", correct: false },
						{ C: "Observando sus conductas y actitudes para comprenderles.", correct: true },
						{ D: "Evitando implicarse.", correct: false },
					],
				},
				{
					5: "Con carácter general, ¿cómo se facilitará la información asistencial al paciente?",
					Respuestas: [
						{ A: "De forma discontinua según la conveniencia del centro sanitario.", correct: false },
						{ B: "Veraz y referida exclusivamente al diagnóstico.", correct: false },
						{ C: "Veraz, razonable y suficiente.", correct: true },
						{ D: "Verbalmente, sin dejar constancia en la historia clínica.", correct: false },
					],
				},
				{
					6: "El tipo de comunicación que debe utilizar el/la celador/a con el paciente, desde el punto de vista personal es el:",
					Respuestas: [
						{ A: "Contractual.", correct: false },
						{ B: "Solidario.", correct: false },
						{ C: "Cooperativo.", correct: false },
						{ D: "Asertivo.", correct: true },
					],
				},
				{
					7: "El proceso mediante el cual las personas interpretan y organizan la información con la finalidad de darle significado y comprensión a su mundo, recibe el nombre de:",
					Respuestas: [
						{ A: "Percepción.", correct: true },
						{ B: "Pensamiento.", correct: false },
						{ C: "Sentimiento.", correct: false },
						{ D: "Intencionalidad.", correct: false },
					],
				},
				{
					8: "El celador en el ejercicio de sus funciones, para comunicarse con el paciente y su familia utilizará, señale la respuesta INCORRECTA:",
					Respuestas: [
						{ A: "Evitará utilizar términos técnicos.", correct: false },
						{ B: "Evitará hacer juicios de valor.", correct: false },
						{ C: "Optará por una actitud apática.", correct: true },
						{ D: "Optará por una actitud de respeto y compresión.", correct: false },
					],
				},
				{
					9: "Entre los factores que obstaculizan la comunicación interpersonal del/a celador/a con el paciente y la familia, se puede citar:",
					Respuestas: [
						{ A: "Usar terminología científica.", correct: true },
						{ B: "Hablar correctamente, con lógica y precisión.", correct: false },
						{ C: "Evitar comentarios improcedentes o innecesarios.", correct: false },
						{ D: "Todas las respuestas anteriores son correctas.", correct: false },
					],
				},
				{
					10: "El comportamiento del/la celador/a delante del paciente y sus familiares debe ser:",
					Respuestas: [
						{ A: "Altivo y concreto.", correct: false },
						{ B: "Cortante y conciso.", correct: false },
						{ C: "Humano y delicado.", correct: true },
						{ D: "Apático e indiferente.", correct: false },
					],
				},
				{
					11: "En el proceso de la comunicación, las interferencias hacen referencia a:",
					Respuestas: [
						{ A: "La interpretación continua de respuestas del emisor y del receptor.", correct: false },
						{ B: "El entorno en que tiene lugar la comunicación.", correct: false },
						{ C: "Las barreras que existen en el proceso de la comunicación.", correct: true },
						{ D: "La información transmitida.", correct: false },
					],
				},
				{
					12: "La escucha activa es un proceso dinámico que exige:",
					Respuestas: [
						{ A: "Que los celadores reaccionen rápidamente al mensaje recibido.", correct: false },
						{ B: "Que los celadores no formulen preguntas sobre el mensaje recibido.", correct: false },
						{ C: "Que los celadores presten atención a la totalidad del mensaje, tanto verbal como no verbal.", correct: true },
						{ D: "Que los celadores no presten atención al mensaje recibido.", correct: false },
					],
				},
				{
					13: "En un momento dado, en nuestro trabajo, nuestro superior jerárquico nos envía un comunicado, ¿de qué tipo de comunicación se trata?",
					Respuestas: [
						{ A: "Horizontal.", correct: false },
						{ B: "Ascendente.", correct: false },
						{ C: "Descendente.", correct: true },
						{ D: "Diagonal.", correct: false },
					],
				},
				{
					14: "Entre las habilidades de comunicación no está:",
					Respuestas: [
						{ A: "Iniciar una conversación.", correct: false },
						{ B: "La discusión.", correct: false },
						{ C: "El tono alto de voz.", correct: true },
						{ D: "Presentarse a sí mismo.", correct: false },
					],
				},
				{
					15: "En toda comunicación existen una serie de elementos que son imprescindibles para que se produzca el proceso comunicativo, señale el elemento NO imprescindible:",
					Respuestas: [
						{ A: "Emisor.", correct: false },
						{ B: "Receptor.", correct: false },
						{ C: "Asertivo.", correct: true },
						{ D: "Retroalimentación.", correct: false },
					],
				},
				{
					16: "¿Cómo debe ofrecerse la información al usuario?",
					Respuestas: [
						{ A: "Escueta y resumida.", correct: false },
						{ B: "Por escrito siempre.", correct: false },
						{ C: "En términos comprensibles.", correct: true },
						{ D: "Clara, sin divagaciones y sólo la debe dar el personal sanitario.", correct: false },
					],
				},
				{
					17: "Indique cuál de las siguientes tareas es función del/la celador/a de información en un hospital:",
					Respuestas: [
						{ A: "Informar de la fecha de ingreso y de la ubicación del paciente.", correct: false },
						{ B: "Informar de la ubicación del paciente y las pruebas a que será sometido.", correct: true },
						{ C: "Informar de la ubicación y estado del paciente.", correct: false },
						{ D: "Informar si el paciente tiene o no restringidas las visitas y las causas de tal medida.", correct: false },
					],
				},
				{
					18: "El/la celador/a destinado/a en el servicio de información habrá de tener perfecto conocimiento de:",
					Respuestas: [
						{ A: "Las camas libres que en cada momento existan en el centro.", correct: false },
						{ B: "La ubicación de todos los servicios del centro, así como los nombres de sus responsables.", correct: false },
						{ C: "La ubicación de todos los servicios del centro.", correct: true },
						{ D: "Los tipos de intervenciones quirúrgicas que se realizan en el centro.", correct: false },
					],
				},
				{
					19: "En relación con la comunicación verbal a través de la expresión oral, ¿cuál de las siguientes afirmaciones es INCORRECTA?",
					Respuestas: [
						{ A: "Se debe tener en cuenta el objetivo de la comunicación.", correct: false },
						{ B: "Se debe tener en cuenta el interés que despierta el mensaje que vamos a comunicar.", correct: false },
						{ C: "Se debe tener en cuenta a quién va dirigida la comunicación y qué aptitud presenta el receptor.", correct: false },
						{ D: "No se debe tener en cuenta el tiempo del que disponemos.", correct: true },
					],
				},
				{
					20: "Los rumores, chismes u opiniones surgidos en el seno de la organización pertenecen a la comunicación denominada como:",
					Respuestas: [
						{ A: "Horizontal.", correct: false },
						{ B: "Indirecta.", correct: false },
						{ C: "Informal.", correct: true },
						{ D: "Genética.", correct: false },
					],
				},
				{
					21: "En cuanto a la orientación al usuario durante su estancia en el centro sanitario, el/la celador/a no puede asumir labores de:",
					Respuestas: [
						{ A: "Orientación sobre la ubicación de los servicios y unidades del centro.", correct: false },
						{ B: "Información sobre horarios de visita.", correct: false },
						{ C: "Información sobre horarios de información médica.", correct: false },
						{ D: "Información sobre las pruebas y/o tratamientos que se le están realizando a los/as pacientes.", correct: true },
					],
				},
				{
					22: "En la relación de atención y acogida al público, el factor más importante para el ciudadano en el que debe centrarse el profesional es:",
					Respuestas: [
						{ A: "El cumplimiento.", correct: true },
						{ B: "La empatía.", correct: false },
						{ C: "La disposición.", correct: false },
						{ D: "Todas las respuestas anteriores son correctas.", correct: false },
					],
				},
				{
					23: "El traslado de un fallecido desde urgencias de un hospital hasta el mortuorio es una función de:",
					Respuestas: [
						{ "A": "Enfermero", "correct": false },
						{ "B": "Personal celador", "correct": true },
						{ "C": "Personal de la funeraria", "correct": false },
						{ "D": "Auxiliar de enfermería", "correct": false }
					]
				},
				{
					24: "Hay que trasladar una mesa y dos sillas de una consulta a otra, en este caso los celadores:",
					Respuestas: [
						{ "A": "Harán el traslado lo antes posible.", "correct": true },
						{ "B": "Harán el traslado cuando crean oportuno.", "correct": false },
						{ "C": "Las respuestas A y B son falsas.", "correct": false },
						{ "D": "No lo harán porque no les corresponde.", "correct": false }
					]
				},
				{
					25: "¿Tienen los celadores alguna función relacionada con la limpieza, conservación de edificios y material?",
					Respuestas: [
						{ A: "No, por ser funciones propias de mantenimiento.", "correct": false },
						{ B: "Sólo en la limpieza, pero referida a aspectos relacionados con el aseo personal de los enfermos.", "correct": false },
						{ C: "Únicamente durante la vigilancia nocturna.", "correct": false },
						{ D: "Deben dar cuenta a sus inmediatos superiores de los desperfectos o anomalías que encontraren en la limpieza y conservación del edificio o material.", "correct": true }
					]
				},
				{
					26: "Las funciones que deben realizar los celadores en los centros sanitarios vienen recogidas en:",
					Respuestas: [
						{ A: "El estatuto de autonomía de Canarias.", "correct": false },
						{ B: "La ley general de sanidad.", "correct": false },
						{ C: "El estatuto jurídico del personal no sanitario.", "correct": true },
						{ D: "El estatuto jurídico del personal sanitario.", "correct": false }
					]
				},
				{
					27: "Según el estatuto jurídico del personal no sanitario al servicio de las instituciones sanitarias de la seguridad social, los celadores:",
					Respuestas: [
						{ A: "Constatarán que el personal de oficio y subalterno cumple su horario de trabajo.", "correct": false },
						{ B: "Se encargarán del esmaltado de muebles clínicos.", "correct": false },
						{ C: "Realizarán la vigilancia de exteriores, pero sólo durante el día.", "correct": false },
						{ D: "Evitarán que los visitantes fumen en las habitaciones.", "correct": true }
					]
				},
				{
					28: "En el estatuto de personal no sanitario al servicio de las instituciones sanitarias de la seguridad social, orden del ministerio de trabajo de 5 de julio de 1971, en qué artículo se detallan todas y cada una de las funciones del celador:",
					Respuestas: [
						{ A: "Artículo 14.3.", correct: false },
						{ B: "Artículo 14.6.", correct: false },
						{ C: "Artículo 14.2.", correct: true },
						{ D: "Artículo 14.5.", correct: false }
					]
				},
				{
					29: "¿Cuál de las siguientes NO es una función propia de los celadores?",
					Respuestas: [
						{ A: "Limpieza de la mesa de autopsias y de la propia sala.", correct: false },
						{ B: "Informar de la defunción a los familiares de los fallecidos.", correct: true },
						{ C: "Ayudar a amortajar a los enfermos fallecidos.", correct: false },
						{ D: "Traslado de cadáveres al mortuorio.", correct: false }
					]
				},
				{
					30: "El servicio área de labores de guardia y vigilancia de ascensorista corresponde al celador:",
					Respuestas: [
						{ A: "Siempre.", correct: false },
						{ B: "Servirán de ascensoristas cuando se les asigne especialmente ese cometido o las necesidades del servicio lo requieran.", correct: true },
						{ C: "Lo hace voluntariamente si se encuentra en el lugar.", correct: false },
						{ D: "Nunca.", correct: false }
					]
				},
				{
					31: "En una institución sanitaria, ¿quién tiene el deber de informar a los familiares de los fallecidos sobre los trámites para el enterramiento?",
					Respuestas: [
						{ A: "Jefe de personal subalterno o en su ausencia encargado de turno (coordinador).", correct: true },
						{ B: "Personal de enfermería.", correct: false },
						{ C: "El médico.", correct: false },
						{ D: "Los celadores.", correct: false }
					]
				},
				{
					32: "¿Quién delegará sus funciones en el jefe de personal subalterno?",
					Respuestas: [
						{ A: "El director de la institución.", correct: false },
						{ B: "El jefe de subalternos.", correct: false },
						{ C: "El director de gestión y servicios generales.", correct: true },
						{ D: "El jefe de personal de oficio.", correct: false }
					]
				},
				{
					33: "El jefe de personal subalterno ejercerá el debido y discreto control de paquetes y bultos que porten:",
					Respuestas: [
						{ A: "Los celadores.", correct: false },
						{ B: "Los enfermeros.", correct: false },
						{ C: "Las personas ajenas a la institución.", correct: true },
						{ D: "El personal de oficio.", correct: false }
					]
				},
				{
					34: "Cuando el familiar de un enfermo demande información sobre el tratamiento que se le está realizando, el celador:",
					Respuestas: [
						{ A: "Orientará la consulta hacia el médico encargado de la asistencia al enfermo.", correct: true },
						{ B: "Orientará la consulta hacia la enfermera encargada de la asistencia al enfermo.", correct: false },
						{ C: "Orientará la consulta hacia su inmediato superior.", correct: false },
						{ D: "Le dará, amablemente, la información sobre el tratamiento y pronóstico que él conozca.", correct: false }
					]
				},
				{
					35: "Es función del celador el traslado de las comunicaciones verbales y la documentación, se realizará con la mayor brevedad posible:",
					Respuestas: [
						{ A: "Siempre.", correct: true },
						{ B: "Dependiendo del destinatario.", correct: false },
						{ C: "Las comunicaciones verbales se trasladarán a la mayor brevedad posible, la documentación puede esperar.", correct: false },
						{ D: "Nunca.", correct: false }
					]
				},
				{
					36: "Cuál de estas funciones no es del celador del equipo de atención primaria:",
					Respuestas: [
						{ A: "Participar en las reuniones de equipo.", correct: false },
						{ B: "Rotulación y manipulación de muestras biológicas.", correct: true },
						{ C: "Vigilancia de acceso y circulación de los usuarios.", correct: false },
						{ D: "Vigilancia del buen uso del mobiliario del centro.", correct: false }
					]
				},
				{
					37: "¿Puede ser función de cualquier celador el manejo de una fotocopiadora?",
					Respuestas: [
						{ A: "No, ya que es función del personal de mantenimiento.", correct: false },
						{ B: "Sólo es función del personal administrativo.", correct: false },
						{ C: "Sí.", correct: true },
						{ D: "Sólo lo hacen celadores especializados.", correct: false }
					]
				},
				{
					38: "El primer contacto del enfermo o usuario, con el hospital, se produce fundamentalmente con:",
					Respuestas: [
						{ A: "El celador.", correct: true },
						{ B: "El médico de puerta.", correct: false },
						{ C: "El auxiliar de enfermería.", correct: false },
						{ D: "Todas las respuestas son correctas.", correct: false }
					]
				},
				{
					39: "Será misión del celador, según el estatuto de personal no sanitario:",
					Respuestas: [
						{ A: "Todas aquellas funciones que le sean encomendadas por su superior, similares a las recogidas en el estatuto y que no hayan quedado específicamente reseñadas.", correct: true },
						{ B: "Sólo aquellas funciones que le sean ordenadas por sus superiores por escrito y que sean similares a las recogidas específicamente en el estatuto.", correct: false },
						{ C: "Todas aquellas funciones que le ordene su superior.", correct: false },
						{ D: "Sólo las establecidas en el estatuto.", correct: false }
					]
				},
				{
					40: "Si un celador observase alguna anomalía o desperfecto en la limpieza del edificio o material:",
					Respuestas: [
						{ A: "Procederá a reparar el desperfecto o anomalía con la mayor brevedad.", correct: false },
						{ B: "Dará cuenta con la mayor brevedad al servicio de mantenimiento.", correct: false },
						{ C: "Dará cuenta a sus inmediatos superiores.", correct: false },
						{ D: "Dará cuenta con la mayor brevedad a su inmediato superior y procederán a reparar el desperfecto o anomalía.", correct: true }
					]
				},
				{
					41: "Las funciones a realizar por el celador:",
					Respuestas: [
						{ A: "Están recogidas en el estatuto de personal sanitario al servicio de las instituciones sanitarias.", correct: false },
						{ B: "Serán aprobadas para cada centro de trabajo por la junta de personal, teniendo en cuenta las necesidades de cada centro sanitario.", correct: false },
						{ C: "Están recogidas en el estatuto de personal no sanitario al servicio de las instituciones sanitarias de la seguridad social (BOE no 174 de 22 de julio de 1971).", correct: true },
						{ D: "Las funciones recogidas en el estatuto de personal sanitario.", correct: false }
					]
				},
				{
					42: "Los celadores en el ejercicio de sus funciones:",
					Respuestas: [
						{ A: "Se abstendrán de hacer comentarios con los familiares y visitantes de los enfermos sobre diagnósticos, exploraciones y tratamientos que se estén realizando a los mismos y, mucho menos, informar sobre los pronósticos de su enfermedad, debiendo siempre orientar las consultas hacia la supervisora encargado de la asistencia del enfermo.", correct: false },
						{ B: "Podrán hacer comentarios con los familiares y visitantes de los enfermos sobre diagnósticos, exploraciones y tratamientos que se estén realizando a los mismos, así como informar sobre los pronósticos de su enfermedad, debiendo siempre previamente consultarlo con el enfermo.", correct: false },
						{ C: "Se abstendrán de hacer comentarios con los familiares y visitantes de los enfermos sobre diagnósticos, exploraciones y tratamientos que se estén realizando a los mismos y, mucho menos, informar sobre los pronósticos de su enfermedad, debiendo siempre orientar las consultas hacia el médico encargado de la asistencia del enfermo.", correct: true },
						{ D: "Podrán intercambiar comentarios con los familiares y visitantes de los enfermos sobre diagnósticos, exploraciones y tratamientos que se estén realizando a los mismos, debiendo siempre orientar las consultas hacia la supervisora encargada de la asistencia del enfermo.", correct: false }
					]
				},
				{
					43: "En relación con la orientación e información a los pacientes y familiares, cuál de las siguientes funciones corresponde al celador:",
					Respuestas: [
						{ A: "Informar a los familiares de los fallecidos en la institución sobre los trámites precisos para llevar a cabo los enterramientos y, en caso necesario, les remitirá al servicio de atención al paciente.", correct: false },
						{ B: "Llamar a los familiares de los enfermos intervenidos para informarles del desarrollo de la intervención.", correct: false },
						{ C: "Avisar a los familiares del paciente que va a ingresar en planta y el tratamiento médico a recibir.", correct: false },
						{ D: "Avisar a los familiares y acompañantes de los asistidos en urgencias que pasen a las dependencias que van a ser informados de la asistencia y evolución del paciente, por parte del personal sanitario.", correct: true }
					]
				},
				{
					44: "Señale cuál de las siguientes tareas deberán desempeñar los celadores en los centros sanitarios:",
					Respuestas: [
						{ A: "Revisión y reparación de pequeños desperfectos en el mobiliario.", correct: false },
						{ B: "Amortajar a los cadáveres y trasladarlos al depósito de cadáveres.", correct: false },
						{ C: "Informar a los familiares de los pacientes de los horarios de visita.", correct: true },
						{ D: "Colocar al paciente en la mesa de operaciones siguiendo las indicaciones del TCAE.", correct: false }
					]
				},
				{
					45: "¿Es una función del celador informar a los familiares de las novedades que se produzcan sobre el pronóstico del paciente?",
					Respuestas: [
						{ A: "Claro, siempre que trabaje en algún servicio de urgencias.", correct: false },
						{ B: "Sí, pero con discreción.", correct: false },
						{ C: "No.", correct: true },
						{ D: "Depende de muchas cosas.", correct: false }
					]
				},
				{
					46: "Las tareas de vigilancia se realizarán en turno de:",
					Respuestas: [
						{ A: "Mañana.", correct: false },
						{ B: "Mañana y tarde.", correct: false },
						{ C: "Mañana, tarde y noche.", correct: true },
						{ D: "Solo de noche.", correct: false }
					]
				},
				{
					47: "El familiar de un paciente pide al celador de puerta que le deje pasar unos alimentos para la dieta especial de un enfermo. ¿Qué hará el celador?",
					Respuestas: [
						{ A: "Si los alimentos no contienen alcohol, los dejará pasar.", correct: false },
						{ B: "Le dice que los pase, pero que la próxima vez pida permiso al supervisor de planta.", correct: false },
						{ C: "No permitirá la introducción de alimentos en el hospital.", correct: true },
						{ D: "Todas son falsas.", correct: false }
					]
				},
				{
					48: "Si un celador observa que un paciente ingresado se dispone a entrar en la cafetería, ¿qué hará?",
					Respuestas: [
						{ A: "Permitirá su entrada.", correct: false },
						{ B: "Permitirá su entrada si es para coger cigarrillos, revistas o periódicos.", correct: false },
						{ C: "Le dirá que vuelva a la planta donde está ingresado y lo acompañará, si es preciso.", correct: true },
						{ D: "Le dirá que para entrar vaya primero a la planta a solicitar permiso al especialista de guardia.", correct: false }
					]
				},
				{
					49: "¿A quién corresponde vigilar la entrada del hospital o institución sanitaria?",
					Respuestas: [
						{ A: "Vigilante de seguridad.", correct: false },
						{ B: "Personal de admisión.", correct: false },
						{ C: "Los celadores.", correct: true },
						{ D: "Todas son correctas.", correct: false }
					]
				},
				{
					50: "Durante un traslado hospitalario, el paciente pide al celador que le deje consultar su historia clínica, el celador:",
					Respuestas: [
						{ A: "Le facilita el acceso a su historia clínica.", correct: false },
						{ B: "No le facilita el acceso a su historia clínica.", correct: true },
						{ C: "No está autorizado para facilitarle el acceso a la historia clínica.", correct: false },
						{ D: "Todas las respuestas son falsas.", correct: false }
					]
				},
				{
					51: "El/la celador/a de puerta debe prohibir la entrada en el centro sanitario a quien lleve:",
					Respuestas: [
						{ A: "Flores.", correct: false },
						{ B: "Comida.", correct: true },
						{ C: "Libros.", correct: false },
						{ D: "Prensa.", correct: false }
					]
				},
				{
					52: "El control de visitas es función de:",
					Respuestas: [
						{ A: "Celador de urgencias.", correct: false },
						{ B: "Vigilante de seguridad.", correct: false },
						{ C: "Celador de puerta.", correct: true },
						{ D: "Celador de quirófano.", correct: false }
					]
				},
				{
					53: "El/la celador/a realizará las siguientes funciones:",
					Respuestas: [
						{ A: "Tramitarán o conducirán con demora las comunicaciones verbales.", correct: false },
						{ B: "Tramitarán o conducirán sin tardanza documentos, correspondencia u objetos que les sean confiados por sus compañeros celadores.", correct: false },
						{ C: "Trasladarán de unos servicios a otros los aparatos o mobiliario que se requiera.", correct: true },
						{ D: "Todas las respuestas anteriores son correctas.", correct: false }
					]
				},
				{
					54: "Indique cuál de las siguientes afirmaciones sobre las tramitaciones verbales que realizan los celadores NO es correcta:",
					Respuestas: [
						{ A: "Las instrucciones forman parte de las tramitaciones verbales.", correct: false },
						{ B: "Transmiten mensajes tanto a compañeros como a superiores o subordinados.", correct: false },
						{ C: "Deben transmitirlas con la máxima celeridad.", correct: false },
						{ D: "Transmiten mensajes a familiares referentes a diagnósticos de pacientes.", correct: true }
					]
				},
				{
					55: "Los celadores en el ejercicio de sus funciones, señale la respuesta CORRECTA:",
					Respuestas: [
						{ A: "Ayudarán a las enfermeras y ayudantes de planta al movimiento y traslado de los enfermos encamados que requieran un trato especial en razón de sus dolencias para hacerles las camas.", correct: true },
						{ B: "Informará a los familiares de los fallecidos en la institución sobre los trámites precisos para llevar a cabo los enterramientos y en caso necesario, les pondrá en contacto la oficina administrativa correspondiente para completar dicha información.", correct: false },
						{ C: "Atención del alumbrado interior y exterior del edificio, instalaciones de alumbrado y fuerza.", correct: false },
						{ D: "Todas las anteriores son funciones del celador.", correct: false }
					]
				},
				{
					56: "Según el estatuto de personal no sanitario, velar continuamente por conseguir el mayor silencio posible en todas las dependencias de la institución es función:",
					Respuestas: [
						{ A: "Del vigilante de seguridad.", correct: false },
						{ B: "Del jefe de personal subalterno.", correct: false },
						{ C: "Del celador.", correct: true },
						{ D: "Del jefe de celadores.", correct: false }
					]
				},
				{
					57: "Un enfermo ingresado en el hospital se queja durante la hora de visita del ruido que hacen algunos familiares del compañero de habitación. ¿Qué es lo primero que debe hacer el celador?",
					Respuestas: [
						{ A: "Informar a su superior de lo que está ocurriendo para que solucione el problema.", correct: false },
						{ B: "Pedir a los visitantes que bajen el tono de voz y no molesten a los demás enfermos.", correct: true },
						{ C: "Avisar al guardia de seguridad para que tome las medidas oportunas.", correct: false },
						{ D: "Nada al respecto, ya que no es función del celador llamar la atención a las visitas de comportamientos erróneos.", correct: false }
					]
				},
				{
					58: "Si un familiar o visitante pretende acceder a la institución con un paquete, el celador:",
					Respuestas: [
						{ A: "No permitirá la entrada de ningún tipo de paquete.", correct: false },
						{ B: "Permitirá la entrada de aquellos paquetes expresamente autorizados por la dirección.", correct: true },
						{ C: "Permitirá la entrada de aquellos paquetes expresamente autorizados por el enfermo.", correct: false },
						{ D: "Permitirá la entrada de un paquete por familiar.", correct: false }
					]
				},
				{
					59: "En cuanto a la orientación al usuario durante su estancia en el centro sanitario, el/la celador/a no puede asumir labores de:",
					Respuestas: [
						{ A: "Orientación sobre la ubicación de los servicios y unidades del centro.", correct: false },
						{ B: "Información sobre horarios de visita.", correct: false },
						{ C: "Información sobre horarios de información médica.", correct: false },
						{ D: "Información sobre las pruebas y/o tratamientos que se le están realizando a los/as pacientes.", correct: true }
					]
				},
				{
					60: "Desde el servicio de admisión requieren la presencia de un celador. Una vez allí le dicen que acompañe a una persona que va a ser hospitalizada. Usted observa que se trata de un enfermo que tenía su ingreso programado con antelación, que viene acompañado de dos familiares y que puede desplazarse autónomamente, usted:",
					Respuestas: [
						{ A: "No acompañará al enfermo por no precisar ayuda para desplazarse.", correct: false },
						{ B: "En estos casos no es responsabilidad del celador acompañar al enfermo ya que viene acompañado.", correct: false },
						{ C: "Seguirá las instrucciones recibidas.", correct: true },
						{ D: "Ninguna de las respuestas anteriores es correcta.", correct: false }
					]
				},
				{
					61: "Los celadores en el ejercicio de sus funciones de vigilancia:",
					Respuestas: [
						{ A: "Vigilarán las entradas de la institución, salvo que la institución disponga del servicio de vigilancia de seguridad privada.", correct: false },
						{ B: "Vigilarán las entradas de la institución, no permitiendo el acceso a sus dependencias más que a las personas autorizadas para ello.", correct: true },
						{ C: "Vigilarán las entradas de la institución, permitiendo el acceso a sus dependencias a las personas autorizadas para ello, en colaboración con el personal del servicio de admisión de pacientes y familiares.", correct: false },
						{ D: "Vigilarán las entradas de la institución, permitiendo solamente el acceso de los pacientes.", correct: false }
					]
				},
				{
					62: "¿Establece el estatuto jurídico del personal no sanitario al servicio de las instituciones sanitarias de la seguridad social, que en determinados casos los celadores lavarán y asearán a los enfermos?",
					Respuestas: [
						{ A: "Si, excepcionalmente.", correct: true },
						{ B: "No, por falta de conocimientos.", correct: false },
						{ C: "No, por ser personal sanitario.", correct: false },
						{ D: "Bajo ninguna circunstancia.", correct: false }
					]
				},
				{
					63: "Cuando un celador traslada a un enfermo a otras dependencias dentro del hospital:",
					Respuestas: [
						{ A: "Se responsabilizará también de la documentación que se le entregue en relación con el enfermo.", correct: true },
						{ B: "La responsabilidad del celador será únicamente trasladar al enfermo de la forma más rápida y correcta posible.", correct: false },
						{ C: "Sólo se responsabiliza de la documentación si lo lleva a radiología.", correct: false },
						{ D: "El personal de enfermería es el único responsable de la documentación clínica.", correct: false }
					]
				},
				{
					64: "La posición de Fowler:",
					Respuestas: [
						{ A: "Consiste en colocar al paciente semisentado formando un ángulo de 45o con las piernas ligeramente flexionadas.", correct: true },
						{ B: "Es similar al decúbito lateral.", correct: false },
						{ C: "No existe.", correct: false },
						{ D: "También se denomina posición de Sims.", correct: false }
					]
				},
				{
					65: "El aseo del paciente en cama:",
					Respuestas: [
						{ A: "Es conveniente que se realice por dos personas.", correct: true },
						{ B: "Siempre habrá de ser realizado por dos personas.", correct: false },
						{ C: "Es conveniente, por el contrario, que sólo lo realice una persona.", correct: false },
						{ D: "El aumento del número de personas en la realización del aseo en cama se aconseja únicamente como medida para finalizar antes, evitando molestias al enfermo.", correct: false }
					]
				},
				{
					66: "Cuando el celador traslada a un paciente desde un servicio a otro, ¿qué NO deberá hacer?",
					Respuestas: [
						{ A: "Llevar la historia del paciente.", correct: false },
						{ B: "Colocar los drenajes sobre la cama.", correct: true },
						{ C: "Informar al paciente qué va a hacer con él.", correct: false },
						{ D: "Informar al personal sanitario del servicio de origen, que se lleva al paciente.", correct: false }
					]
				},
				{
					67: "¿Cuál de los siguientes materiales auxiliares se usa normalmente en un hospital?",
					Respuestas: [
						{ A: "Grúas.", correct: false },
						{ B: "Camillas.", correct: false },
						{ C: "Sillas de ruedas.", correct: false },
						{ D: "Todos se utilizan.", correct: true }
					]
				},
				{
					68: "La enfermera nos indica que debe realizarse el lavado de cabeza a un paciente encamado. El celador ayudará a colocarlo en posición:",
					Respuestas: [
						{ A: "Trendelenburg.", correct: false },
						{ B: "Fowler.", correct: false },
						{ C: "Morestin.", correct: false },
						{ D: "Roser.", correct: true }
					]
				},
				{
					69: "¿Cuál es la obligación de un celador en relación con la colocación y retirada de cuñas para la recogida de excretas de los enfermos?",
					Respuestas: [
						{ A: "Cuando por circunstancias especiales concurrentes en el enfermo, no pueda este ser movido sólo por las enfermeras o ayudantes de planta, ayudará en la colocación y retirada de las cuñas para la recogida de excretas de dichos enfermos.", correct: true },
						{ B: "Sólo ayudará en la retirada.", correct: false },
						{ C: "No es su cometido.", correct: false },
						{ D: "Ninguna es correcta.", correct: false }
					]
				},
				{
					70: "Cuando el paciente se encuentra en un plano inclinado de 45 grados, respecto al plano del suelo, boca arriba y con la cabeza más baja que los pies, está en posición:",
					Respuestas: [
						{ A: "Anti-trendelenburg.", correct: false },
						{ B: "Morestín.", correct: false },
						{ C: "Trendelenburg inverso.", correct: false },
						{ D: "Trendelenburg.", correct: true }
					]
				},
				{
					71: "Al transferir un paciente desde la cama a un sillón en aquellas circunstancias que el enfermo puede colaborar en el traslado, se le sujetará:",
					Respuestas: [
						{ A: "Pasando el brazo del enfermo por encima del cuello del celador.", correct: false },
						{ B: "Cogiéndolo de las manos.", correct: false },
						{ C: "Abrazándolo a la altura de los hombros.", correct: false },
						{ D: "Por la cintura.", correct: true }
					]
				},
				{
					72: "Las modificaciones realizadas en la postura corporal del paciente encamado, y que forman parte del plan de cuidados, se denominan:",
					Respuestas: [
						{ A: "Fisioterapia pasiva.", correct: false },
						{ B: "Arcos de movimiento.", correct: false },
						{ C: "Cambios posturales.", correct: true },
						{ D: "Mecánica corporal.", correct: false }
					]
				},
				{
					73: "Cuando un paciente se encuentra en la cama tumbado sobre el abdomen boca abajo, con las piernas extendidas y la cabeza girada a un lado, decimos que se encuentra en:",
					Respuestas: [
						{ A: "Decúbito supino.", correct: false },
						{ B: "Decúbito prono.", correct: true },
						{ C: "Posición Fowler.", correct: false },
						{ D: "Posición Trendelemburg.", correct: false }
					]
				},
				{
					74: "La cama debe estar situada en la habitación de tal manera que permita atender al paciente:",
					Respuestas: [
						{ A: "Por ambos laterales y los pies de la cama.", correct: true },
						{ B: "Por ambos laterales de la cama.", correct: false },
						{ C: "Por ambos laterales, los pies y la cabecera de la cama.", correct: false },
						{ D: "Por ambos laterales y la cabecera de la cama.", correct: false }
					]
				},
				{
					75: "Corresponde al celador realizar el traslado de:",
					Respuestas: [
						{ A: "Muestras biológicas al servicio de laboratorio.", correct: false },
						{ B: "Documentos y correspondencia entre unidades.", correct: true },
						{ C: "Distribución de las dietas a los pacientes.", correct: false },
						{ D: "Órdenes médicas verbales a otros miembros del equipo.", correct: false }
					]
				},
				{
					76: "Si se solicita una exploración radiológica a un paciente ingresado en urgencias, ¿quién debe realizar el traslado del paciente, para la realización de dicha exploración?",
					Respuestas: [
						{ A: "Los técnicos de rayos.", correct: false },
						{ B: "La auxiliar de enfermería responsable del paciente.", correct: false },
						{ C: "El celador.", correct: true },
						{ D: "El personal de recepción.", correct: false }
					]
				},
				{
					77: "El traslado y movilización de pacientes y usuarios es una competencia de:",
					Respuestas: [
						{ A: "Los enfermeros.", correct: false },
						{ B: "Los celadores.", correct: true },
						{ C: "Los auxiliares de enfermería.", correct: false },
						{ D: "Los técnicos medios en cuidados auxiliares de enfermería.", correct: false }
					]
				},
				{
					78: "¿Quién supervisa las medidas y medios que se utilizan para la inmovilización y/o sujeción del paciente?",
					Respuestas: [
						{ A: "El propio celador.", correct: false },
						{ B: "El servicio de seguridad.", correct: false },
						{ C: "Los familiares del paciente.", correct: false },
						{ D: "El personal sanitario responsable.", correct: true }
					]
				},
				{
					79: "Las anomalías o deficiencias observadas en la dotación del servicio encomendado respecto al traslado de material y equipos sanitarios y no sanitarios:",
					Respuestas: [
						{ A: "Se pone en conocimiento del responsable de la unidad para su reparación, mediante los protocolos establecidos.", correct: true },
						{ B: "Se comunican, pero no hay protocolos al efecto.", correct: false },
						{ C: "Se comunican mensualmente.", correct: false },
						{ D: "No es necesario comunicarlas.", correct: false },
					],
				},
				{
					80: "Uno de los criterios de realización del traslado del material y los equipos sanitarios y no sanitarios es el siguiente:",
					Respuestas: [
						{ A: "El medio utilizado para el transporte no requiere identificación.", correct: false },
						{ B: "La lencería se traslada en cajas destinadas a tal fin para depositarlas en el lugar correspondiente.", correct: false },
						{ C: "El medio utilizado para el transporte se identifica, en función del material sanitario y no sanitario a trasladar, para asegurar su desplazamiento con seguridad, atendiendo a la normativa de riesgos laborales.", correct: true },
						{ D: "La atención al público se proporciona demostrando habilidades de comunicación.", correct: false },
					],
				},
				{
					81: "El profesional celador en la movilización de enfermos debe aplicar una buena técnica basada en los principios:",
					Respuestas: [
						{ A: "De ergonomía.", correct: true },
						{ B: "Del menor esfuerzo posible.", correct: false },
						{ C: "De celeridad en la movilización.", correct: false },
						{ D: "Todas las respuestas anteriores son correctas.", correct: false },
					],
				},
				{
					82: "La cama electrocircular, cuando gira al paciente, da un giro de:",
					Respuestas: [
						{ A: "30 grados.", correct: false },
						{ B: "180 grados.", correct: true },
						{ C: "90 grados.", correct: false },
						{ D: "45 grados.", correct: false },
					],
				},
				{
					83: "Es muy importante la comunicación con los pacientes terminales, la actitud que debe asumir el celador incluye:",
					Respuestas: [
						{ A: "Es mejor dejarlo solo para no molestarlo.", correct: false },
						{ B: "Actitud de empatía y comprensión.", correct: true },
						{ C: "No dejarle que manifieste su tristeza ni su llanto.", correct: false },
						{ D: "Evitar que el paciente hable sobre su enfermedad.", correct: false },
					],
				},
				{
					84: "¿Cómo se denomina al período de tiempo que transcurre desde que un paciente va a ser intervenido, se prepara la intervención, se realiza y hasta que es dado de alta del hospital?",
					Respuestas: [
						{ A: "Preoperatorio.", correct: false },
						{ B: "Postoperatorio.", correct: false },
						{ C: "Perioperatorio.", correct: true },
						{ D: "Transoperatorio.", correct: false },
					],
				},
				{
					85: "Una intervención quirúrgica puede cumplir varias funciones según el objetivo que se persigue con su realización. Indica la opción CORRECTA:",
					Respuestas: [
						{ A: "Curativa o estética.", correct: false },
						{ B: "Reparadora o reconstructiva.", correct: false },
						{ C: "Todas son correctas.", correct: true },
						{ D: "Diagnóstica.", correct: false },
					],
				},
				{
					86: "El gorro es una prenda que los celadores/as deben utilizar dentro del quirófano:",
					Respuestas: [
						{ A: "No, solo deben utilizarlo los cirujanos.", correct: false },
						{ B: "Solo está indicado para el personal sanitario.", correct: false },
						{ C: "Es de uso obligatorio para el personal con el pelo largo.", correct: false },
						{ D: "Es una prenda obligatoria para todas las personas que accedan al área quirúrgica.", correct: true },
					],
				},
				{
					87: "El quirófano debe estar construido con unas determinadas características. Señala la opción INCORRECTA:",
					Respuestas: [
						{ A: "Las paredes, techo y suelo deben estar construidos con un material no poroso de fácil limpieza.", correct: false },
						{ B: "La combinación de humedad baja y temperatura baja es deseable para evitar la deshidratación del tejido expuesto del paciente.", correct: true },
						{ C: "Las puertas que disminuyan la turbulencia del aire.", correct: false },
						{ D: "La iluminación del techo se instalará en un solo pivote.", correct: false },
					],
				},
				{
					88: "En el quirófano, el celador/a tiene una serie de funciones. Indica la opción INCORRECTA:",
					Respuestas: [
						{ A: "Colocar a los pacientes en la mesa de operaciones.", correct: false },
						{ B: "Ayudará dentro del quirófano a entregar instrumental que sea requerido por el personal médico.", correct: false },
						{ C: "Las opciones B y D son incorrectas.", correct: true },
						{ D: "Si el paciente fallece, avisará a un compañero para que realice el traslado a mortuorio.", correct: false },
					],
				},
				{
					89: "¿Cuál de las siguientes NO es una posición quirúrgica?",
					Respuestas: [
						{ A: "Trendelenburg.", correct: false },
						{ B: "Posición de Proetz.", correct: false },
						{ C: "Posición de Morestín.", correct: false },
						{ D: "Todas las opciones anteriores son correctas.", correct: true },
					],
				},
				{
					90: "Indica el orden correcto al colocarse la vestimenta de quirófano:",
					Respuestas: [
						{ A: "Calzas, gorro, mascarilla, bata estéril y guantes estériles.", correct: true },
						{ B: "Gorro, mascarilla, calzas, bata estéril y guantes estériles.", correct: false },
						{ C: "Mascarilla, calzas, gorro, bata estéril y guantes estériles.", correct: false },
						{ D: "Calzas, gorro, mascarilla, guantes estériles y bata estéril.", correct: false },
					],
				},
				{
					91: "Indica la respuesta que NO es correcta:",
					Respuestas: [
						{ A: "En la antisepsia no se utilizan productos químicos.", correct: false },
						{ B: "La infección es la invasión y entrada en el organismo de agentes extraños muertos ya sean virus, hongos o bacterias.", correct: false },
						{ C: "Se conoce como asepsia al conjunto de técnicas que garantizan la presencia de materia séptica o microorganismos infecciosos.", correct: false },
						{ D: "Todas las respuestas anteriores son falsas.", correct: true },
					],
				},
				{
					92: "Dentro de los métodos de desinfección de material existen los procedimientos físicos, ¿cuál de los siguientes NO está dentro de este tipo de método?",
					Respuestas: [
						{ A: "Pasteurización.", correct: false },
						{ B: "Antisépticos.", correct: true },
						{ C: "Hervido y ebullición.", correct: false },
						{ D: "Rayos solares.", correct: false },
					],
				},
				{
					93: "El hipoclorito sódico es un método de desinfección químico, ¿a qué procedimiento químico pertenece?",
					Respuestas: [
						{ A: "Aldehídos.", correct: false },
						{ B: "Cloruros.", correct: true },
						{ C: "Alcoholes.", correct: false },
						{ D: "Fenol y derivados.", correct: false },
					],
				},
				{
					94: "El conjunto de técnicas utilizadas para la eliminación o inhibición de los gérmenes patógenos que existen sobre objetos y superficies, se denomina:",
					Respuestas: [
						{ A: "Pasteurización.", correct: false },
						{ B: "Esterilización.", correct: false },
						{ C: "Higiene.", correct: false },
						{ D: "Desinfección.", correct: true },
					],
				},
				{
					95: "La desinfección que solo es activa frente a virus lipídicos de tamaño medio, bacterias en forma vegetativa y hongos, es de:",
					Respuestas: [
						{ A: "Bajo nivel.", correct: false },
						{ B: "Nivel intermedio.", correct: false },
						{ C: "Alto nivel.", correct: true },
						{ D: "Ninguna de las opciones anteriores es correcta.", correct: false },
					],
				},
				{
					96: "El instrumental que requiere asepsia total y que temporal o definitivamente va a quedar en el interior del organismo, se denomina:",
					Respuestas: [
						{ A: "Crítico.", correct: true },
						{ B: "Semicrítico.", correct: false },
						{ C: "No crítico.", correct: false },
						{ D: "Material fungible.", correct: false },
					],
				},
				{
					97: "Para que la conservación del material estéril sea la más adecuada, el almacén debe reunir los siguientes requisitos, EXCEPTO:",
					Respuestas: [
						{ A: "Las paredes deben ser lisas para facilitar su limpieza.", correct: false },
						{ B: "Debe tener acceso restringido.", correct: false },
						{ C: "El material debe almacenarse caliente.", correct: true },
						{ D: "Las condiciones climáticas ideales son: ventilación (6 renovaciones por hora), temperatura (15oC - 25oC) y humedad (40% - 60%).", correct: false },
					],
				},
				{
					98: "Un material esterilizado que se encuentre envasado en contenedor (con protección del filtro) tiene un periodo de caducidad de:",
					Respuestas: [
						{ A: "Doce meses.", correct: false },
						{ B: "Seis meses.", correct: true },
						{ C: "Máximo tres meses.", correct: false },
						{ D: "Un mes.", correct: false },
					],
				},
				{
					99: "Señala la respuesta CORRECTA, cuando un celador/a es contratado en un centro sanitario deberá:",
					Respuestas: [
						{ A: "Todas las respuestas son correctas.", correct: true },
						{ B: "Valorar el estado inmuno/vacunal frente hepatitis, tétanos.", correct: false },
						{ C: "Seguir controles periódicos por el servicio de medicina preventiva.", correct: false },
						{ D: "Si padece una exposición accidental (pinchazo) debe comunicarlo al servicio correspondiente en un plazo de tiempo no superior a 24 horas.", correct: false },
					],
				},
				{
					100: "En cuanto al lavado de manos quirúrgico, una de las siguientes recomendaciones es FALSA, indica cuál:",
					Respuestas: [
						{ A: "Enjabonado con jabón antiséptico durante 3 minutos, aclarado.", correct: true },
						{ B: "Cepillado de uñas 30 segundos cada mano con cepillo jabonoso, aclarado.", correct: false },
						{ C: "Secado, sin frotar, con toalla estéril.", correct: false },
						{ D: "Cerrar el grifo mediante el sistema pedal pie.", correct: false },
					],
				},
				{
					101: "Las principales recomendaciones en cuanto al uso de guantes son las siguientes, indica la opción ERRÓNEA:",
					Respuestas: [
						{ A: "Deben utilizarse cuando pueda existir contacto con sangre, secreciones corporales, fluidos corporales.", correct: false },
						{ B: "Evitar su uso en situaciones no recomendadas.", correct: false },
						{ C: "Retirar los guantes después del contacto con el paciente y desecharlo.", correct: false },
						{ D: "No es necesario realizar higiene de manos al cambiar de guantes.", correct: true },
					],
				},
				{
					102: "En la UCI, ¿cómo se denominan las unidades especializadas identificadas según patologías que presentan los pacientes?",
					Respuestas: [
						{ A: "Cubículos.", correct: false },
						{ B: "Box o boxes.", correct: true },
						{ C: "Zonas de vigilancia intensiva.", correct: false },
						{ D: "Unidades especiales de vigilancia.", correct: false },
					],
				},
				{
					103: "En la UCI, ¿cuál es la disposición idónea para colocar las camas?",
					Respuestas: [
						{ A: "Hacia un lado con la cabecera hacia el centro.", correct: false },
						{ B: "Siempre a un lado para poder acceder fácilmente al paciente.", correct: false },
						{ C: "En el centro del box con la cabecera hacia la pared del fondo.", correct: true },
						{ D: "La posición de la cama no es importante, sino los cuidados que se dispensan al paciente.", correct: false },
					],
				},
				{
					104: "“Partes del cuerpo humano de entidad suficiente procedente de abortos, mutilaciones, operaciones quirúrgicas o autopsias”, es la definición de:",
					Respuestas: [
						{ A: "Cadáver.", correct: false },
						{ B: "Restos humanos.", correct: true },
						{ C: "Restos cadavéricos.", correct: false },
						{ D: "Ninguna de las respuestas anteriores es correcta.", correct: false },
					],
				},
				{
					105: "El rigor mortis es el endurecimiento del cuerpo que se produce después de la muerte, ¿cuándo se produce?",
					Respuestas: [
						{ A: "5 horas de la muerte.", correct: false },
						{ B: "12 horas de la muerte.", correct: false },
						{ C: "De 2 a 4 horas de la muerte.", correct: true },
						{ D: "De 7 a 9 horas de la muerte.", correct: false },
					],
				},
				{
					106: "Se define como “toda práctica mortuoria que permite la conservación y exposición del cadáver con las debidas garantías sanitarias”:",
					Respuestas: [
						{ A: "Tanalogía.", correct: false },
						{ B: "Tanatopraxia.", correct: true },
						{ C: "Tanatopsia.", correct: false },
						{ D: "Tanatoplasia.", correct: false },
					],
				},
				{
					107: "La muerte es el cese total y definido de todas las funciones vitales del organismo humano. Se suele utilizar la palabra éxitus para referirse al momento del fallecimiento, ¿qué otros nombres recibe ese momento?",
					Respuestas: [
						{ A: "Defunción.", correct: false },
						{ B: "Deceso.", correct: false },
						{ C: "Óbito.", correct: false },
						{ D: "Todas son correctas.", correct: true },
					],
				},
				{
					108: "Según Gisbert Calabuig existen cuatro fases de la muerte, ¿a cuál de estas fases nos referimos si decimos que se produce una extinción o desaparición progresiva e irreversible de la actividad biológica de los diferentes órganos y tejidos?",
					Respuestas: [
						{ A: "Fase muerte aparente.", correct: false },
						{ B: "Fase muerte relativa.", correct: false },
						{ C: "Fase muerte intermedia.", correct: true },
						{ D: "Fase muerte absoluta.", correct: false },
					],
				},
				{
					109: "Según el estatuto de personal no sanitario, ¿quién tiene misión de informar a los familiares de los pacientes fallecidos en la institución, sobre los trámites precisos para llevar a cabo inhumación y/o cremación y si es necesario los pondrán en contacto con la oficina administrativa correspondiente para completar dicha información?",
					Respuestas: [
						{ A: "El médico responsable del paciente.", correct: false },
						{ B: "El enfermero responsable del paciente.", correct: false },
						{ C: "El jefe de personal subalterno.", correct: true },
						{ D: "El celador/a de la unidad.", correct: false },
					],
				},
				{
					110: "La actuación de los celadores/ras en relación con los pacientes fallecidos se centrará en:",
					Respuestas: [
						{ A: "Ayudar el personal sanitario en el amortajamiento.", correct: false },
						{ B: "Trasladar el cadáver al mortuorio.", correct: false },
						{ C: "Se encargará de amortajar a los enfermos fallecidos.", correct: false },
						{ D: "Las respuestas A y B son correctas.", correct: true },
					],
				},
				{
					111: "¿En qué consiste el amortajamiento cuando un paciente fallece?",
					Respuestas: [
						{ A: "Desconectar y retirar dispositivos como sondas y catéteres.", correct: false },
						{ B: "Retirar objetos personales del cuerpo.", correct: false },
						{ C: "Cerrar los ojos y boca del cadáver.", correct: false },
						{ D: "Todas las respuestas son correctas.", correct: true },
					],
				},
				{
					112: "El complejo de la zona mortuoria debe reunir una serie de condiciones, ¿cuál de las siguientes NO se encuentra entre ellas?",
					Respuestas: [
						{ A: "Zonas de aparcamiento para familiares.", correct: true },
						{ B: "Estancias para familiares.", correct: false },
						{ C: "Espacios para recepción de cadáveres.", correct: false },
						{ D: "Despachos para manejo de documentos.", correct: false },
					],
				},
				{
					113: "¿Qué temperatura es la adecuada en el depósito de cadáveres si el paciente va a estar unos días?",
					Respuestas: [
						{ A: "4oC.", correct: true },
						{ B: "6oC.", correct: false },
						{ C: "5oC.", correct: false },
						{ D: "2oC.", correct: false },
					],
				},
				{
					114: "Una celadora está ayudando a una enfermera a amortajar un cadáver para su traslado al mortuorio. Cuando la enfermera le indica que retire la sonda vesical del cadáver, ¿cómo debe actuar la celadora?",
					Respuestas: [
						{ A: "Se pondrá los guantes y la retirará con cuidado para no romperla.", correct: false },
						{ B: "Le indicará a la enfermera que esa no es su función.", correct: true },
						{ C: "Le pedirá a la enfermera que antes le vacíe el globo vesical.", correct: false },
						{ D: "Hará lo que le indica la enfermera ya que el trabajo en equipo es fundamental.", correct: false },
					],
				},
				{
					115: "Cuando hablamos del conjunto de operaciones encaminadas a investigar lesiones capaces de producir muerte, nos referimos a:",
					Respuestas: [
						{ A: "Técnica de Virchow.", correct: false },
						{ B: "Técnica de Chon.", correct: false },
						{ C: "Técnica de Letulle.", correct: false },
						{ D: "Técnica de autopsia.", correct: true },
					],
				},
				{
					116: "¿Cuál de las siguientes técnicas de autopsia es la que se usa con más frecuencia en los hospitales?",
					Respuestas: [
						{ A: "Técnica de Letulle.", correct: false },
						{ B: "Técnica de Chon.", correct: false },
						{ C: "Técnica de Virchow.", correct: true },
						{ D: "Ninguna de las opciones anteriores es correcta.", correct: false },
					],
				},
				{
					117: "¿Cuáles de los siguientes, son requisitos administrativos para realizar una autopsia clínica?",
					Respuestas: [
						{ A: "Datos de identificación y ubicación o procedencia del paciente.", correct: false },
						{ B: "Resumen de la historia clínica.", correct: false },
						{ C: "Anotaciones sobre la posible causa de la muerte.", correct: false },
						{ D: "Todas las respuestas anteriores son correctas.", correct: true },
					],
				},
				{
					118: "La autopsia médico legal se denomina también:",
					Respuestas: [
						{ A: "Las respuestas B, C y D son correctas.", correct: true },
						{ B: "Judicial.", correct: false },
						{ C: "Forense.", correct: false },
						{ D: "Médico forense u obducción.", correct: false },
					],
				},
				{
					119: "¿Cuál de las siguientes son causas de autopsia médico legal de acuerdo con las normas internacionales y lo establecido en nuestra legislación?",
					Respuestas: [
						{ A: "Muertes violentas.", correct: false },
						{ B: "Muertes no violentas.", correct: false },
						{ C: "Todas las opciones son correctas.", correct: true },
						{ D: "Muertes misceláneas.", correct: false },
					],
				},
				{
					120: "¿Qué resolución regula el puesto de celador/a especifico en salas de autopsia denominado 'celador auxiliar de autopsias'?",
					Respuestas: [
						{ A: "Resolución 17 de septiembre de 1985.", correct: false },
						{ B: "Resolución 10 de marzo de 1996.", correct: false },
						{ C: "Resolución 22 de mayo de 1981.", correct: true },
						{ D: "Resolución 31 de enero de 1980.", correct: false },
					],
				},
				{
					121: "¿Cuál de las siguientes respuestas es incorrecta en cuanto a las funciones del celador/a auxiliar de autopsias?",
					Respuestas: [
						{ A: "Transporte del cadáver desde el depósito hasta la mesa de autopsias.", correct: false },
						{ B: "Auxiliar al médico durante la autopsia.", correct: false },
						{ C: "Llamará al servicio de limpieza para que al finalizar limpie la mesa, la sala y el material de autopsias.", correct: true },
						{ D: "Vigilar que no acceda a estas dependencias más que el personal autorizado para ello.", correct: false },
					],
				},
				{
					122: "Las dimensiones de la mesa de autopsias deben ser:",
					Respuestas: [
						{ A: "1,90 m de longitud x 0,60 m de ancho.", correct: false },
						{ B: "2,20 m de longitud x 0,90 m de ancho.", correct: false },
						{ C: "1,80 m de longitud x 0,70 m de ancho.", correct: false },
						{ D: "2,10 m de longitud x 0,75 m de ancho.", correct: true },
					],
				},
				{
					123: "Dentro del material inicial de una autopsia común se encuentra:",
					Respuestas: [
						{ A: "Instrumentos para seccionar partes blandas y cartílagos.", correct: false },
						{ B: "Instrumentos de prensa.", correct: false },
						{ C: "Instrumentos de medición.", correct: false },
						{ D: "Todas son correctas.", correct: true },
					],
				},
				{
					124: "¿Cuál de los siguientes productos no se considera material fungible?",
					Respuestas: [
						{ A: "Guantes estériles.", correct: false },
						{ B: "Hojas de bisturí.", correct: false },
						{ C: "Almohadas.", correct: true },
						{ D: "Gasa estériles.", correct: false },
					],
				},
				{
					125: "Dentro del almacén, NO es función de los celadores:",
					Respuestas: [
						{ A: "Comprobación de los vales de suministros o pedidos internos.", correct: false },
						{ B: "Notificación de la disminución o agotamiento de productos, a fin de tomar medidas para su reposición.", correct: false },
						{ C: "Colocación de los productos almacenables en sus ubicaciones respectivas.", correct: false },
						{ D: "Control del gasto del almacén de los diferentes servicios peticionarios.", correct: true },
					],
				},
				{
					126: "En un hospital existen siempre dos almacenes básicos, ¿sabrías decir cuáles son?",
					Respuestas: [
						{ A: "Almacén general y almacén de farmacia.", correct: true },
						{ B: "Almacén de vestuario y almacén de lencería.", correct: false },
						{ C: "Almacén de impresos y almacén de equipos de oficina.", correct: false },
						{ D: "Almacén de impresos y almacén de menaje.", correct: false },
					],
				},
				{
					127: "Si clasificamos los inventarios según una concepción logística, cuál de los siguientes NO pertenecería a dicha clasificación:",
					Respuestas: [
						{ A: "Inventarios cíclicos o de lotes.", correct: false },
						{ B: "Inventarios de productos ya elaborados.", correct: true },
						{ C: "Inventarios estaciónales o periódicos.", correct: false },
						{ D: "Inventarios de seguridad.", correct: false },
					],
				},
				{
					128: "El material y los productos de hostelería, menaje, comestibles y bebidas, ¿qué consideración tiene dentro de los grupos de artículos que consume un hospital?",
					Respuestas: [
						{ A: "Material sanitario.", correct: false },
						{ B: "Material no sanitario.", correct: true },
						{ C: "Material volátil.", correct: false },
						{ D: "Otro material.", correct: false },
					],
				},
				{
					129: "En un almacén, ¿qué entendemos por stock?",
					Respuestas: [
						{ A: "Función de contar las existencias en un momento determinado.", correct: false },
						{ B: "Información que permite conocer en todo momento las entradas, las salidas y las existencias.", correct: true },
						{ C: "Distribución y consumo de materiales por los servicios.", correct: false },
						{ D: "Estancia provisional de mercancía en el almacén.", correct: false },
					],
				},
				{
					130: "¿Qué es un código de barras?",
					Respuestas: [
						{ A: "Conjunto de signos formado por una serie de líneas y números asociados a ellas, que se pone sobre los productos de consumo y se utiliza para la gestión informática de las existencias.", correct: true },
						{ B: "Conjunto de estanterías limitadas por una serie de barras sucesivas para impedir el deterioro de las existencias.", correct: false },
						{ C: "Conjunto de líneas que sirven para identificar el precio máximo de los artículos.", correct: false },
						{ D: "Número de líneas continuas que identifican el volumen de producto de un almacén.", correct: false },
					],
				},
				{
					131: "Dentro del servicio de almacén, ¿quién debe realizar la entrega de los pedidos programados a las personas que acuden a retirarlos?",
					Respuestas: [
						{ A: "El celador del servicio al que corresponde el pedido.", correct: false },
						{ B: "El encargado de suministro.", correct: false },
						{ C: "El auxiliar administrativo del almacén.", correct: false },
						{ D: "El celador de almacén.", correct: true },
					],
				},
				{
					132: "A la hora de ubicar un muelle de carga para un almacén hospitalario debemos tener en cuenta que:",
					Respuestas: [
						{ A: "Se puede ubicar en cualquier sitio que creamos conveniente.", correct: false },
						{ B: "Habrá que tener en cuenta las comodidades de los que van a trabajar en ese lugar.", correct: false },
						{ C: "Esté cerca de la sede de las ambulancias para aprovechar el mismo espacio.", correct: false },
						{ D: "No este próximo a las zonas asistenciales, para que no influya en el tránsito de las ambulancias y evitar ruidos que perjudiquen a los enfermos.", correct: true },
					],
				},
				{
					133: "La función de contar las existencias de un almacén en un momento determinado se denomina:",
					Respuestas: [
						{ A: "Entradas.", correct: false },
						{ B: "Almacenaje.", correct: false },
						{ C: "Salidas.", correct: false },
						{ D: "Inventario.", correct: true },
					],
				},
				{
					134: "El concepto importante en la gestión de almacenes que mide el tiempo transcurrido desde que un artículo entra en el almacén hasta que se produce su salida, recibe el nombre de:",
					Respuestas: [
						{ A: "Índice cronológico.", correct: false },
						{ B: "Índice aleatorio.", correct: false },
						{ C: "Índice operativo.", correct: false },
						{ D: "Índice de rotación.", correct: true },
					],
				},
				{
					135: "Entre las tareas propias del celador en almacén NO figura:",
					Respuestas: [
						{ A: "Notificación de la disminución o agotamiento de productos, a fin de tomar medidas para su reposición.", correct: false },
						{ B: "Entrega de productos no programados, en su caso, o urgentes.", correct: false },
						{ C: "Colocación de los productos almacenables en sus ubicaciones respectivas.", correct: false },
						{ D: "Realizar informes mensuales con la valoración económica de los movimientos del almacén.", correct: true },
					],
				},
				{
					136: "¿Cuál es el objetivo final de los almacenes hospitalarios?",
					Respuestas: [
						{ A: "Proporcionar puestos de trabajo a los celadores.", correct: false },
						{ B: "La distribución de pedidos.", correct: true },
						{ C: "Facilitar los suministros externos del hospital.", correct: false },
						{ D: "Todas las respuestas anteriores son correctas.", correct: false },
					],
				},
				{
					137: "En cuanto a la organización del almacén, el celador tendrá a su cargo, además de la vigilancia, el cierre de puertas de la zona de almacenaje:",
					Respuestas: [
						{ A: "No, sólo si son puertas del área de hospitalización.", correct: false },
						{ B: "Si, cuando no haya guarda de seguridad.", correct: false },
						{ C: "Si.", correct: true },
						{ D: "No, el cierre de puertas corresponde al personal de oficio.", correct: false },
					],
				},
				{
					138: "Con relación a las tareas del celador en la zona de acceso de almacén general, el celador deberá:",
					Respuestas: [
						{ A: "Permitir el paso a todo el que desee entrar.", correct: false },
						{ B: "No dejar pasar a nadie para evitar robos de material.", correct: false },
						{ C: "Sólo dejará pasar a quien tenga que descargar mercancías.", correct: true },
						{ D: "No permitir el acceso a sus dependencias más que a las personas autorizadas para ello.", correct: false },
					],
				},
				{
					139: "En el almacenamiento nos referimos a un stock como:",
					Respuestas: [
						{ A: "La cantidad de productos que se encuentran en el almacén.", correct: true },
						{ B: "La cantidad de artículos consumidos.", correct: false },
						{ C: "Control de las existencias de cada artículo para evitar situaciones de desabastecimiento.", correct: false },
						{ D: "La cantidad de productos pedidos a suministros externos.", correct: false },
					],
				},
				{
					140: "Señale cuál de las siguientes cuestiones se relaciona con el alojamiento de los productos en el almacén:",
					Respuestas: [
						{ A: "Descargar, abrir cajas y envoltorios.", correct: false },
						{ B: "Evitar pérdidas, robos y mermas.", correct: false },
						{ C: "Identificación clara y precisa de las estanterías.", correct: true },
						{ D: "Determinar la existencia real.", correct: false },
					],
				},
				{
					141: "¿Qué es material fungible?",
					Respuestas: [
						{ A: "Aquel que desaparece o deteriora con su uso.", correct: true },
						{ B: "Aquel que es estéril.", correct: false },
						{ C: "Las respuestas A y B son correctas.", correct: false },
						{ D: "Ninguna de las respuestas anteriores es correcta.", correct: false },
					],
				},
				{
					142: "El material que tras su uso requiere ser tratado para volver a ser utilizado nuevamente se llama:",
					Respuestas: [
						{ A: "Consumible o fungible.", correct: false },
						{ B: "Desechable.", correct: false },
						{ C: "Reutilizable.", correct: true },
						{ D: "No consumible o inventariable.", correct: false },
					],
				},
				{
					143: "¿De quién es función la carga y descarga de los productos que lleguen o se encuentren en un almacén de un centro sanitario?",
					Respuestas: [
						{ A: "Del auxiliar administrativo.", correct: false },
						{ B: "Del peón.", correct: false },
						{ C: "Del personal de mantenimiento.", correct: false },
						{ D: "Del celador del almacén.", correct: true },
					],
				},
				{
					144: "La estancia provisional de las mercancías en el almacén, lo que implica colocación, conservación y control de las existencias, se denomina:",
					Respuestas: [
						{ A: "Almacenaje.", correct: true },
						{ B: "Inventario.", correct: false },
						{ C: "Stockaje.", correct: false },
						{ D: "Todas son correctas.", correct: false },
					],
				},
				{
					145: "En el servicio de farmacia hospitalaria, ¿qué profesionales prestan servicio?",
					Respuestas: [
						{ A: "Farmacéuticos.", correct: false },
						{ B: "FIR (farmacéutico interno residente).", correct: false },
						{ C: "DUE / TCAE / celador/a.", correct: false },
						{ D: "Todas son correctas.", correct: true },
					],
				},
				{
					146: "Si nos referimos a; toda materia, cualquiera que sea su origen a la que se le atribuye una actividad apropiada para constituir un medicamento, estamos hablando de:",
					Respuestas: [
						{ A: "Excipiente.", correct: false },
						{ B: "Materia prima.", correct: false },
						{ C: "Fórmula magistral.", correct: false },
						{ D: "Principio activo.", correct: true },
					],
				},
				{
					147: "¿Cuál de las siguientes es la definición de excipiente?",
					Respuestas: [
						{ A: "Es el destinado a una posterior transformación industrial por un fabricante autorizado.", correct: false },
						{ B: "Aquella materia que se añada a los principios activos para servirles de vehículo, posibilitar su preparación y estabilidad.", correct: true },
						{ C: "Todo medicamento que tenga la misma composición en principios activos y la misma forma farmacéutica.", correct: false },
						{ D: "Forma farmacéutica de un principio activo que se investiga como referencia de un ensayo clínico.", correct: false },
					],
				},
				{
					148: "“Actividad de salud pública que tiene como objetivo la identificación, cuantificación, evaluación y prevención de riesgos del uso de los medicamentos, permitiendo así el seguimiento de los posibles efectos adversos de los medicamentos”, es la definición de:",
					Respuestas: [
						{ A: "Radiofármaco.", correct: false },
						{ B: "Farmacovigilancia.", correct: true },
						{ C: "Preparado o fórmula oficial.", correct: false },
						{ D: "Ninguna es correcta.", correct: false },
					],
				},
				{
					149: "¿Cuál de las siguientes opciones es la incorrecta con respecto al área de citostáticos de una farmacia hospitalaria?",
					Respuestas: [
						{ A: "Es una zona aislada del resto del servicio.", correct: false },
						{ B: "Es de acceso libre siempre que se utilicen calzas y gorro.", correct: true },
						{ C: "Debe poseer una campaña de flujo laminar vertical.", correct: false },
						{ D: "Sin recirculación de aire ni aire acondicionado.", correct: false },
					],
				},
				{
					150: "¿Cuál de las siguientes son funciones del celador/a en el almacén de farmacia?",
					Respuestas: [
						{ A: "Recepción de material.", correct: false },
						{ B: "Transporte de material dentro de la farmacia.", correct: false },
						{ C: "Dispensación de determinado material.", correct: false },
						{ D: "Todas son funciones del celador/a.", correct: true },
					],
				},
				{
					151: "¿Qué significa que la distribución de medicamentos se realice por el método de “unidosis”?",
					Respuestas: [
						{ A: "Envases individualizados por paciente y día.", correct: true },
						{ B: "Sólo se administrará una dosis al día al paciente.", correct: false },
						{ C: "El pedido de unidosis la realizará dirección de enfermería.", correct: false },
						{ D: "Ninguna es correcta.", correct: false },
					],
				},
				{
					152: "¿Cuál de las siguientes actividades NO se realiza en un servicio de farmacia?",
					Respuestas: [
						{ A: "Control, dispensación de estupefacientes y psicótropos.", correct: false },
						{ B: "Control, dispensación de medicamentos extranjeros.", correct: false },
						{ C: "Control de botiquines en unidades hospitalarias.", correct: false },
						{ D: "Control del uso de alcohol 90o en unidades de hospitalización.", correct: true },
					],
				},
				{
					153: '"Es una técnica que se realiza cuando no es posible una adecuada alimentación por vía oral o por sonda", es la definición de:',
					Respuestas: [
						{ A: "Nutrición enteral.", correct: false },
						{ B: "Nutrición artificial.", correct: false },
						{ C: "Nutrición parenteral.", correct: true },
						{ D: "Todas son correctas.", correct: false },
					],
				},
				{
					154: "De las siguientes opciones, ¿cuál se considera centro o establecimiento, si hablamos del animalario?",
					Respuestas: [
						{ A: "Organismo público o privado, autorizada por el órgano competente para realizar algunas de las funciones específicas.", correct: false },
						{ B: "Utilización, tanto invasiva como no invasiva, de un animal con fines experimentales.", correct: false },
						{ C: "Toda instalación, edificio, grupo de edificios u otros locales e instalaciones móviles, incluidos aquellos no totalmente cerrados o cubiertos.", correct: true },
						{ D: "Todas son incorrectas.", correct: false },
					],
				},
				{
					155: "La utilización de animales en los procedimientos solo podrá tener lugar cuando persiga alguno de estos fines, indica la opción INCORRECTA:",
					Respuestas: [
						{ A: "Investigación traslacional o aplicada.", correct: false },
						{ B: "Investigación fundamental.", correct: false },
						{ C: "La investigación dirigida a la eliminación de especies.", correct: true },
						{ D: "La medicina legal y forense.", correct: false },
					],
				},
				{
					156: "El Real Decreto 53/2013 establece como principio general la promoción e implementación del 'principio de las tres erres', ¿a qué hacen referencia?",
					Respuestas: [
						{ A: "Regeneración, reemplazo y recuperación.", correct: false },
						{ B: "Reemplazo, reducción y refinamiento.", correct: true },
						{ C: "Refinamiento, regeneración y revisión.", correct: false },
						{ D: "Regeneración, recuperación y revisión.", correct: false },
					],
				},
				{
					157: "¿A qué hace referencia el principio de reducción?",
					Respuestas: [
						{ A: "El número de animales utilizados se reducirá al mínimo siempre que ello no comprometa los objetivos del proyecto.", correct: true },
						{ B: "Se utilizará siempre que sea posible, en lugar de un procedimiento que no conlleven la utilización de animales vivos.", correct: false },
						{ C: "Los métodos utilizados se refinarán tanto como sea posible para recudir al mínimo cualquier posible dolor.", correct: false },
						{ D: "Ninguna es correcta.", correct: false },
					],
				},
				{
					158: "¿Cómo debe realizarse la eutanasia de los animales?",
					Respuestas: [
						{ A: "Con el menor dolor, sufrimiento y angustia posibles.", correct: false },
						{ B: "Se llevará a cabo por una persona cualificada.", correct: false },
						{ C: "En un establecimiento de un criador.", correct: false },
						{ D: "Todas las opciones son correctas.", correct: true },
					],
				},
				{
					159: "¿Qué tipo de métodos se utilizarán para la eutanasia de los animales?",
					Respuestas: [
						{ A: "Decapitación.", correct: false },
						{ B: "Dióxido de carbono.", correct: false },
						{ C: "Aturdimiento eléctrico.", correct: false },
						{ D: "Todas las opciones anteriores son correctas.", correct: true },
					],
				},
				{
					160: "Las condiciones ambientales en las que se críen, mantengan o utilicen los animales, ¿con qué frecuencia se deben verificar?",
					Respuestas: [
						{ A: "Semanalmente.", correct: false },
						{ B: "Cada dos o tres días.", correct: false },
						{ C: "A diario.", correct: true },
						{ D: "No hay una frecuencia establecida.", correct: false },
					],
				},
				{
					161: "En cuanto al transporte de animales, indica la opción INCORRECTA:",
					Respuestas: [
						{ A: "La normativa vigente no influye en el transporte de animales.", correct: true },
						{ B: "Los contenedores garantizarán la contención de los animales.", correct: false },
						{ C: "Los vehículos dispondrán de sistemas de anclaje cuando proceda.", correct: false },
						{ D: "El transporte de animales se realizará según la normativa vigente.", correct: false },
					],
				},
				{
					162: "Los criadores, suministradores y usuarios deberán registrar una serie de datos, ¿cuál de los siguientes no es uno de ellos?",
					Respuestas: [
						{ A: "Nombre y número de registro del centro.", correct: false },
						{ B: "Número de animales en el centro en el momento del abrir el registro.", correct: false },
						{ C: "Número de veces al día que se debe alimentar al animal.", correct: true },
						{ D: "Los animales utilizados en procedimientos indicando el proyecto.", correct: false },
					],
				},
				{
					163: "¿Cuál de las siguientes son funciones del celador/a dentro del animalario?",
					Respuestas: [
						{ A: "Se encargarán del adecuado manejo de los animales según sus características.", correct: false },
						{ B: "Se encargarán de que los bebederos estén siempre abastecidos de agua suficiente.", correct: false },
						{ C: "Todas son funciones del celador/a en el animalario.", correct: true },
						{ D: "Lavarán las cubetas y jaulas de los animales con la periodicidad necesaria.", correct: false },
					],
				},
				{
					164: "¿Qué Real Decreto tiene por objeto establecer las normas aplicables para la protección de los animales utilizados, criados o suministrados con fines de experimentación y otros fines científicos incluyendo la educación y docencia?",
					Respuestas: [
						{ A: "Real Decreto 32/2007.", correct: false },
						{ B: "Real Decreto 63/2010.", correct: false },
						{ C: "Real Decreto 20/2012.", correct: false },
						{ D: "Real Decreto 53/2013.", correct: true },
					],
				},
				{
					165: "La documentación clínica tiene diversas utilidades como (señala la respuesta CORRECTA):",
					Respuestas: [
						{ A: "Evaluación de la calidad de la asistencia sanitaria.", correct: false },
						{ B: "Obtención de datos epidemiológicos.", correct: false },
						{ C: "Material para la investigación y docencia.", correct: false },
						{ D: "Todas las respuestas anteriores son correctas.", correct: true },
					],
				},
				{
					166: "El transporte de documentación:",
					Respuestas: [
						{ A: "Debe realizarlo el auxiliar administrativo.", correct: false },
						{ B: "Es función de otro tipo de personal.", correct: false },
						{ C: "Es función del celador.", correct: true },
						{ D: "Es función del TCAE.", correct: false },
					],
				},
				{
					167: "No es un documento clínico de uso hospitalario:",
					Respuestas: [
						{ A: "Hoja de urgencias.", correct: false },
						{ B: "Orden de tratamiento.", correct: false },
						{ C: "Hoja operatoria.", correct: false },
						{ D: "Impreso de citación.", correct: true },
					],
				},
				{
					168: "“El conjunto de documentos que contiene los datos, valoraciones e informaciones de cualquier índole sobre la situación y la evolución clínica de un paciente a lo largo del proceso asistencial”, es lo que se conoce como:",
					Respuestas: [
						{ A: "Documentación clínica.", correct: false },
						{ B: "Historia clínica.", correct: true },
						{ C: "Información clínica.", correct: false },
						{ D: "Informe de alta médica.", correct: false },
					],
				},
				{
					169: "Cuando la información sanitaria generada se documenta después de la atención recibida en atención primaria, especializada o socio-sanitaria, hablamos de:",
					Respuestas: [
						{ A: "Documentación clínica.", correct: false },
						{ B: "Documentación sanitaria.", correct: true },
						{ C: "Historias clínicas.", correct: false },
						{ D: "Todas las respuestas anteriores son correctas.", correct: false },
					],
				},
				{
					170: "El documento acreditativo del derecho a la protección de la salud de los ciudadanos, es:",
					Respuestas: [
						{ A: "La tarjeta sanitaria.", correct: true },
						{ B: "El DNI o NIF.", correct: false },
						{ C: "El pasaporte.", correct: false },
						{ D: "La cartilla de la seguridad social.", correct: false },
					],
				},
				{
					171: "Son documentos clínicos de uso en atención primaria todos, excepto:",
					Respuestas: [
						{ A: "Impreso de citación.", correct: false },
						{ B: "Hoja de ingreso.", correct: true },
						{ C: "Impreso de solicitud de pruebas complementarias.", correct: false },
						{ D: "Historia de enfermería.", correct: false },
					],
				},
				{
					172: "En cuanto a la conservación de la documentación clínica, señale cuál de las siguientes opciones es INCORRECTA:",
					Respuestas: [
						{ A: "Los profesionales sanitarios tienen el deber de cooperar en la creación y el mantenimiento de una documentación clínica ordenada y secuencial del proceso asistencial del paciente.", correct: false },
						{ B: "La gestión de la historia clínica por los centros con pacientes hospitalizados, se realizará a través de la unidad de admisión y documentación clínica.", correct: false },
						{ C: "Los centros sanitarios tienen la obligación de conservar la documentación clínica en condiciones que garanticen su correcto mantenimiento y seguridad, como mínimo cinco años contados desde la fecha de alta del primer proceso asistencial del paciente.", correct: true },
						{ D: "La custodia de dichas historias clínicas estará bajo la responsabilidad de la dirección del centro sanitario.", correct: false },
					],
				},
				{
					173: "¿Cuál de los siguientes documentos forma parte de la documentación clínica de un paciente?",
					Respuestas: [
						{ A: "Receta médica.", correct: false },
						{ B: "Impreso de reclamaciones.", correct: false },
						{ C: "Hoja de interconsulta.", correct: true },
						{ D: "Petición de dietas.", correct: false },
					],
				},
				{
					174: "La historia clínica tiene como fin principal:",
					Respuestas: [
						{ A: "Facilitar al profesional sanitario el desarrollo de sus funciones.", correct: false },
						{ B: "Contribuir a la investigación médica.", correct: false },
						{ C: "Recoger los resultados de las analíticas.", correct: false },
						{ D: "Facilitar la asistencia sanitaria.", correct: true },
					],
				},
				{
					175: "Los menores de edad no emancipados:",
					Respuestas: [
						{ A: "No tienen derecho a acceder a su historia clínica.", correct: false },
						{ B: "A partir de 16 años pueden acceder a la historia clínica con autorización paterna.", correct: false },
						{ C: "A partir de 16 años pueden solicitar por sí mismos el acceso a su historia clínica.", correct: true },
						{ D: "Deben solicitar el acceso a la historia clínica a través de sus representantes legales.", correct: false },
					],
				},
				{
					176: "Una vez finalizado un episodio asistencial se facilitará al paciente:",
					Respuestas: [
						{ A: "Un informe clínico.", correct: true },
						{ B: "La historia clínica.", correct: false },
						{ C: "Un consentimiento informado.", correct: false },
						{ D: "El alta médica.", correct: false },
					],
				},
				{
					177: "La utilidad de la historia clínica es:",
					Respuestas: [
						{ A: "Asistencial.", correct: false },
						{ B: "Información sanitaria.", correct: false },
						{ C: "Médico-legal.", correct: false },
						{ D: "Todas las respuestas anteriores son correctas.", correct: true },
					],
				},
				{
					178: "La hoja de informe de alta, de la historia clínica de atención especializada se conservará:",
					Respuestas: [
						{ A: "Como mínimo cuatro años a partir de la fecha del último episodio asistencial en que el paciente haya sido atendido en el hospital.", correct: false },
						{ B: "Como mínimo seis años a partir de la fecha del último episodio asistencial en que el paciente haya sido atendido en el hospital.", correct: false },
						{ C: "Como mínimo cinco años a partir de la fecha del último episodio asistencial en que el paciente haya sido atendido en el hospital.", correct: false },
						{ D: "Indefinidamente utilizando el soporte más adecuado que garantice esta correcta conservación.", correct: true },
					],
				},
				{
					179: "¿Puede un celador acceder a los datos de la historia clínica de un paciente?",
					Respuestas: [
						{ A: "No, en ningún caso.", correct: false },
						{ B: "El acceso a los datos de la historia clínica de los pacientes está limitado solo al personal facultativo.", correct: false },
						{ C: "Sí, a los datos relacionados con sus propias funciones.", correct: true },
						{ D: "Siempre que tenga autorización del jefe de personal subalterno.", correct: false },
					],
				},
				{
					180: "El personal que accede a los datos de la historia clínica en el ejercicio de sus funciones queda sujeto al deber de:",
					Respuestas: [
						{ A: "Confidencialidad.", correct: false },
						{ B: "Secreto.", correct: true },
						{ C: "Reserva.", correct: false },
						{ D: "Discreción.", correct: false },
					],
				},
				{
					181: "En el traslado de historias clínicas y documentos, los celadores se ocuparán de:",
					Respuestas: [
						{ A: "Establecer los mecanismos de custodia activa en el archivo.", correct: false },
						{ B: "Entregar las historias clínicas a personas no autorizadas.", correct: false },
						{ C: "Facilitar el acceso a la historia clínica una vez finalizado el proceso asistencial.", correct: false },
						{ D: "Del traslado de las historias clínicas y documentación complementaria desde la unidad hospitalaria correspondiente al archivo de historias clínicas.", correct: true },
					],
				},
				{
					182: "NO es un documento de traslado ordinario, por parte de los celadores, el siguiente:",
					Respuestas: [
						{ A: "Partes de quirófano.", correct: false },
						{ B: "Órdenes de hospitalización.", correct: false },
						{ C: "Expedición de la tarjeta sanitaria individual.", correct: true },
						{ D: "Partes de mantenimiento.", correct: false },
					],
				},
				{
					183: "Los celadores se ocuparán del traslado de las historias clínicas y documentación complementaria desde:",
					Respuestas: [
						{ A: "La unidad hospitalaria correspondiente al archivo de historias clínicas.", correct: true },
						{ B: "El archivo central de historias clínicas hasta la unidad hospitalaria de un hospital privado.", correct: false },
						{ C: "La unidad hospitalaria de un hospital a otro.", correct: false },
						{ D: "Del archivo central a un centro de salud de área.", correct: false },
					],
				},
				{
					184: "La periodicidad de la recogida de historias clínicas por el celador será fijada por:",
					Respuestas: [
						{ A: "La enfermera de guardia.", correct: false },
						{ B: "El médico jefe del hospital.", correct: false },
						{ C: "El director del hospital.", correct: false },
						{ D: "El jefe del archivo central de historias clínicas.", correct: true },
					],
				},
				{
					185: "De conformidad con la legislación básica sanitaria, se permite la utilización de la información contenida en la historia clínica con fines:",
					Respuestas: [
						{ A: "Asistenciales, de investigación y docencia.", correct: false },
						{ B: "Asistenciales y de salud pública.", correct: false },
						{ C: "De salud pública, epidemiológicos, investigación y docencia.", correct: true },
						{ D: "Epidemiológicos y de salud pública.", correct: false },
					],
				},
				{
					186: "Entre los documentos clínicos de uso hospitalario, destacan:",
					Respuestas: [
						{ A: "Hoja de ingreso.", correct: false },
						{ B: "Impreso de alta voluntaria.", correct: false },
						{ C: "Gráficas de constantes vitales.", correct: false },
						{ D: "Todas las respuestas anteriores son correctas.", correct: true },
					],
				},
				{
					187: "Los documentos administrativos para la gestión, organización y coordinación de recursos del centro sanitario, forman parte de:",
					Respuestas: [
						{ A: "Documentación clínica.", correct: false },
						{ B: "Documentación no clínica.", correct: true },
						{ C: "Documentación no sanitaria.", correct: false },
						{ D: "Documentación sanitaria.", correct: false },
					],
				},
				{
					188: "En un protocolo de sujeción mecánica en una unidad de hospitalización psiquiátrica el número de personas que debe intervenir para quitar la sujeción mecánica es de:",
					Respuestas: [
						{ A: "2-3 personas.", correct: false },
						{ B: "3 personas mínimo.", correct: false },
						{ C: "4 personas.", correct: true },
						{ D: "2 personas mínimo.", correct: false },
					],
				},
				{
					189: "¿Cómo se llama la dificultad para articular palabra y expresarse?",
					Respuestas: [
						{ A: "Dislexia.", correct: false },
						{ B: "Afonía.", correct: false },
						{ C: "Disfagia.", correct: false },
						{ D: "Ninguna de las respuestas anteriores es correcta.", correct: true },
					],
				},
				{
					190: "El miedo o angustia a las multitudes, es:",
					Respuestas: [
						{ A: "Obsesión.", correct: false },
						{ B: "Trastorno adaptativo.", correct: false },
						{ C: "Fobia.", correct: true },
						{ D: "Manía.", correct: false },
					],
				},
				{
					191: "Entre los trastornos de tipo psicótico, se encuentra:",
					Respuestas: [
						{ A: "Fobia a la luz.", correct: false },
						{ B: "Autismo infantil.", correct: true },
						{ C: "Anorexia nerviosa.", correct: false },
						{ D: "Dislexia.", correct: false },
					],
				},
				{
					192: "Los trastornos de personalidad, se pueden presentar como:",
					Respuestas: [
						{ A: "Demencias.", correct: false },
						{ B: "Alucinaciones.", correct: false },
						{ C: "Pérdida de la realidad.", correct: false },
						{ D: "Agresividad.", correct: true },
					],
				},
				{
					193: "Dentro de la actuación ante una urgencia psiquiátrica en pacientes con riesgo suicida, NO es función propia del celador:",
					Respuestas: [
						{ A: "Formular denuncia ante el juzgado competente con el fin de evitar demandas familiares posteriores.", correct: true },
						{ B: "Si el paciente precisa utilizar material de riesgo (máquinas de afeitar, etc.) permanecer a su lado mientras los use.", correct: false },
						{ C: "Controles frecuentes durante la noche.", correct: false },
						{ D: "Conocer la deambulación (situación) del paciente en cada momento.", correct: false },
					],
				},
				{
					194: "El síntoma más precoz en la enfermedad de Alzheimer es:",
					Respuestas: [
						{ A: "Temblores.", correct: false },
						{ B: "Desorientación.", correct: false },
						{ C: "Pérdida de la memoria.", correct: true },
						{ D: "Alteraciones del equilibrio.", correct: false },
					],
				},
				{
					195: "Un paciente oye voces que le incitan al suicidio, sufre:",
					Respuestas: [
						{ A: "Trastorno conductual.", correct: false },
						{ B: "Alucinación.", correct: true },
						{ C: "Déficit cognitivo.", correct: false },
						{ D: "Desviación psicosexual.", correct: false },
					],
				},
				{
					196: "Un paciente es ingresado contra su voluntad y por requerimiento judicial, su hospitalización es:",
					Respuestas: [
						{ A: "Voluntaria.", correct: false },
						{ B: "Involuntaria.", correct: false },
						{ C: "Forzosa.", correct: true },
						{ D: "Ilegal.", correct: false },
					],
				},
				{
					197: "NO es norma obligada en la sujeción terapéutica del paciente psiquiátrico:",
					Respuestas: [
						{ A: "Comprobar periódicamente las sujeciones por la seguridad y la comodidad del paciente.", correct: false },
						{ B: "La sujeción mecánica debe continuar el menor tiempo posible, a medida que el paciente se va tranquilizando se deben ir retirando sujeciones.", correct: false },
						{ C: "Todas las sujeciones terapéuticas han de reflejarse en el correspondiente parte judicial.", correct: true },
						{ D: "La sujeción debe permitir administrar perfusión endovenosa por el antebrazo, así como recibir líquidos y alimentos.", correct: false },
					],
				},
				{
					198: "La dificultad para la articulación de palabras se define como:",
					Respuestas: [
						{ A: "Deambular.", correct: false },
						{ B: "Disartria.", correct: true },
						{ C: "Afasia.", correct: false },
						{ D: "Ecolalia.", correct: false },
					],
				},
				{
					199: "En la unidad de psiquiatría del hospital un paciente empieza a actuar de forma muy violenta, ¿quién tendría que realizar las maniobras de contención mecánica?",
					Respuestas: [
						{ A: "Exclusivamente el celador de la unidad.", correct: false },
						{ B: "La implicación en la actuación de reducir al paciente debe ser de todo el personal, independientemente del estamento profesional.", correct: true },
						{ C: "El personal sanitario.", correct: false },
						{ D: "El personal de seguridad.", correct: false },
					],
				},
				{
					200: "En relación a la sujeción e inmovilización en un paciente agitado, ¿qué es una sujeción completa?",
					Respuestas: [
						{ A: "Inmovilización del tronco y dos extremidades.", correct: false },
						{ B: "Inmovilización del tronco y las cuatro extremidades.", correct: true },
						{ C: "Inmovilización con chaleco.", correct: false },
						{ D: "Inmovilización con cinturón pélvico.", correct: false },
					],
				},
				{
					201: "¿Cuál de las características siguientes pueden ser asociadas con la demencia?",
					Respuestas: [
						{ A: "Trastorno del sueño.", correct: false },
						{ B: "Depresión.", correct: false },
						{ C: "Alucinaciones.", correct: false },
						{ D: "Todas las respuestas anteriores son correctas.", correct: true },
					],
				},
				{
					202: "Son trastornos de la conducta que pueden aparecer en la enfermedad de Alzheimer:",
					Respuestas: [
						{ A: "Agresividad.", correct: false },
						{ B: "Llanto.", correct: false },
						{ C: "Gritos.", correct: false },
						{ D: "Todas las respuestas anteriores son correctas.", correct: true },
					],
				},
				{
					203: "Se entiende por psiquiatría, aquella rama de la medicina que tiene por objeto:",
					Respuestas: [
						{ A: "El estudio, diagnóstico, tratamiento y prevención de las enfermedades mentales.", correct: false },
						{ B: "Tratar ciertos trastornos de la personalidad y la conducta.", correct: false },
						{ C: "Tratar de evitar y poner remedio a ciertas variantes psíquicas anormales.", correct: false },
						{ D: "Todas las respuestas anteriores son ciertas.", correct: true },
					],
				},
				{
					204: "Cuando se recibe a un paciente psiquiátrico en urgencias, ¿qué medidas se aplicarán?",
					Respuestas: [
						{ A: "Medidas de seguridad y contención verbal.", correct: false },
						{ B: "Contención farmacológica.", correct: false },
						{ C: "Contención verbal, medidas de seguridad, inmovilización terapéutica y contención farmacológica.", correct: true },
						{ D: "Inmovilización terapéutica.", correct: false },
					],
				},
				{
					205: "En 1948 la O.M.S. (Organización Mundial de la Salud) definió el término salud como:",
					Respuestas: [
						{ A: "El incompleto bienestar físico, mental y social y no sólo como ausencia de enfermedad.", correct: false },
						{ B: "El completo bienestar físico, mental y social sin ninguna enfermedad.", correct: false },
						{ C: "El completo bienestar físico, mental y social y no solamente la ausencia de enfermedad.", correct: true },
						{ D: "Ninguna de las anteriores es la definición verdadera.", correct: false },
					],
				},
				{
					206: "En la unidad de psiquiatría, es tarea propia del celador:",
					Respuestas: [
						{ A: "Quitar la sujeción terapéutica cuando el mismo considera que el paciente ya está tranquilo.", correct: false },
						{ B: "Dar la comida al paciente que se resiste a comer.", correct: false },
						{ C: "Colaborar en la sujeción o reducción del paciente.", correct: true },
						{ D: "Comprobar que el paciente ha tomado la medicación para dormir.", correct: false },
					],
				},
				{
					207: "En la unidad de psiquiatría del hospital un paciente empieza a actuar de forma muy violenta, ¿quién tendría que realizar las maniobras de contención mecánica?",
					Respuestas: [
						{ A: "Exclusivamente el celador de la unidad.", correct: false },
						{ B: "El personal sanitario.", correct: false },
						{ C: "La implicación en la actuación de reducir al paciente debe ser de todo el personal, independientemente del estamento profesional.", correct: true },
						{ D: "El personal de seguridad.", correct: false },
					],
				},
				{
					208: "Indique cuál sería la actitud correcta a adoptar por un celador ante un enfermo mental, en la unidad de psiquiatría:",
					Respuestas: [
						{ A: "Vigilar de forma esporádica al paciente.", correct: false },
						{ B: "Comprobar que no tiene a su alcance medios con los que pueda autolesionarse.", correct: true },
						{ C: "Proporcionar al paciente los objetos que solicite para mantenerlo tranquilo.", correct: false },
						{ D: "Suministrar la medicación al paciente.", correct: false },
					],
				},
				{
					209: "No es un material utilizado para la sujeción mecánica total o parcial en pacientes de la unidad de psiquiatría:",
					Respuestas: [
						{ A: "Alargaderas.", correct: false },
						{ B: "Cintas para los miembros inferiores.", correct: false },
						{ C: "Cinturón estrecho craneal.", correct: true },
						{ D: "Cinturón ancho abdominal.", correct: false },
					],
				},
				{
					210: "Cómo se utiliza el sistema de bocas de incendio equipadas (B.I.E.), si la manguera es de 45 mm:",
					Respuestas: [
						{ A: "Se desenrolla como mínimo un 50%.", correct: false },
						{ B: "Se desenrolla como máximo un 70%.", correct: false },
						{ C: "Se desenrolla como máximo un 80%.", correct: true },
						{ D: "Hay que desenrollarla por completo.", correct: false },
					],
				},
				{
					211: "Para los fuegos que NO sean eléctricos, utilizaremos un extintor:",
					Respuestas: [
						{ A: "De polvo polivalente ABC.", correct: true },
						{ B: "De agua tratada.", correct: false },
						{ C: "De nitrógeno líquido.", correct: false },
						{ D: "De CO2.", correct: false },
					],
				},
				{
					212: "Sobre los planes de emergencia contra incendios se puede afirmar que:",
					Respuestas: [
						{ A: "Tienen el objetivo primordial de minimizar el tiempo de espera de los servicios de emergencia.", correct: false },
						{ B: "Tienen como finalidad la formación del personal sanitario en la lucha contra incendios y otras catástrofes y emergencias.", correct: false },
						{ C: "Ante una determinada situación de riesgo, el plan o planes de emergencia contra incendios, pueden ser enunciados como la planificación y organización humana, para la utilización óptima de los medios técnicos previstos, con la finalidad de reducir al máximo las posibles consecuencias económicas y humanas de la emergencia.", correct: true },
						{ D: "Tienen como objetivo primordial la dotación de medios técnicos para la lucha contra incendios a los centros sanitarios en el ámbito nacional o autonómico según el tipo de plan.", correct: false },
					],
				},
				{
					213: "El agua es el agente extintor por excelencia, pero uno de sus inconvenientes es:",
					Respuestas: [
						{ A: "Provoca daños excesivos en la estructura y mobiliario de los edificios.", correct: false },
						{ B: "Requiere equipos de bombeo.", correct: false },
						{ C: "Es inadecuado para fuegos de materiales sólidos.", correct: false },
						{ D: "Conduce la electricidad.", correct: true },
					],
				},
				{
					214: "El emplazamiento de los extintores permitirá:",
					Respuestas: [
						{ A: "Que sean fácilmente visibles y accesibles.", correct: true },
						{ B: "Que estén lo más retirados a los puntos donde se estime mayor probabilidad de iniciarse el incendio.", correct: false },
						{ C: "A ser posible lejanos a las salidas de evacuación.", correct: false },
						{ D: "Fijados a paramentos verticales como mínimo a 1.70 metros sobre el suelo.", correct: false },
					],
				},
				{
					215: "En caso de tener que utilizar un extintor por un conato de incendio el procedimiento correcto será:",
					Respuestas: [
						{ A: "Presionará la válvula y dirigirá el agente extintor a la base de las llamas.", correct: false },
						{ B: "Presionará la válvula y dirigirá el agente extintor a la base de las llamas en zigzag.", correct: false },
						{ C: "Presionará la válvula y dirigirá el agente extintor a la base de las llamas en zigzag, avanzando a medida que las llamas se van apagando.", correct: false },
						{ D: "Presionará la válvula y dirigirá el agente extintor a la base de las llamas en zigzag, avanzando a medida que las llamas se van apagando, asegurándose que el fuego está apagado y permanecerá alerta.", correct: true },
					],
				},
				{
					216: "En caso de evacuación por incendio de un hospital se debe:",
					Respuestas: [
						{ A: "Dirigir a los ocupantes a los sótanos del edificio.", correct: false },
						{ B: "Dirigir a los ocupantes hacia el exterior del edificio, a los puntos de reunión.", correct: true },
						{ C: "Dirigir a los ocupantes a las terrazas superiores del edificio.", correct: false },
						{ D: "Se aconseja permanecer en el puesto de trabajo hasta que lleguen la ayuda exterior.", correct: false },
					],
				},
				{
					217: "Si hay un incendio y tiene que utilizar un extintor, ¿hacia dónde dirigirá el chorro?",
					Respuestas: [
						{ A: "Hacia la parte superior de las llamas.", correct: false },
						{ B: "Por encima de las llamas.", correct: false },
						{ C: "Hacia la base de las llamas.", correct: true },
						{ D: "Es indiferente.", correct: false },
					],
				},
				{
					218: "En materia de protección contra incendios, los EPI son:",
					Respuestas: [
						{ A: "Los equipos de protección individual.", correct: false },
						{ B: "Los equipos de primera intervención.", correct: true },
						{ C: "Los equipos para intervenir.", correct: false },
						{ D: "Los equipos personales imprescindibles.", correct: false },
					],
				},
				{
					219: "Antes de tocar a un accidentado en contacto con corriente eléctrica debe:",
					Respuestas: [
						{ A: "Cortar la corriente.", correct: true },
						{ B: "Avisar a los compañeros.", correct: false },
						{ C: "Utilizar agua.", correct: false },
						{ D: "Protegerse con material no aislante.", correct: false },
					],
				},
				{
					220: "Un fuego de clase 'B' es el que:",
					Respuestas: [
						{ A: "No origina brasas. La combustión se produce en la superficie superior o más externa.", correct: true },
						{ B: "Al arder origina brasas que permanecen en combustión una vez extinguidas las llamas, con posibilidad de regenerar fuego.", correct: false },
						{ C: "Su combustión es violenta, y frecuentemente con deflagraciones.", correct: false },
						{ D: "No origina brasas. La combustión se produce en forma volumétrica (chorros, dardos, esferas, etc.).", correct: false },
					],
				},
				{
					221: "¿Qué tipo de extintor se utiliza en caso de fuego eléctrico?",
					Respuestas: [
						{ A: "De nitrógeno líquido.", correct: false },
						{ B: "De polvo polivalente.", correct: false },
						{ C: "De agua tratada.", correct: false },
						{ D: "De CO2.", correct: true },
					],
				},
				{
					222: "En el manejo de bocas de incendios ante un conato de incendio se conseguirá una mayor rapidez y eficacia en la extinción del fuego:",
					Respuestas: [
						{ A: "Rompiendo el cristal y abriendo la válvula que da paso al agua para facilitar la extensión de la manguera.", correct: false },
						{ B: "Rompiendo el cristal y abriendo la válvula que da paso al agua para facilitar la extensión de la manguera y dirigir la lanza hacia la base de las llamas.", correct: false },
						{ C: "Rompiendo o abriendo el cristal, desenrollando la manguera, abriendo la válvula que da paso al agua, regular la salida de agua, girar la boquilla de la lanza y dirigirla sobre el foco del fuego.", correct: true },
						{ D: "Rompiendo el cristal, desenrollando la manguera, abrir la válvula a su máximo caudal y dirigir la lanza hacia las llamas.", correct: false },
					],
				},
				{
					223: "En aplicación de la normativa sobre protección anti-incendios en los establecimientos sanitarios:",
					Respuestas: [
						{ A: "En atención a la gravedad de la emergencia podrán utilizarse todas las vías de entrada y salida del establecimiento.", correct: false },
						{ B: "Todas las vías de evacuación disponibles y las puertas de acceso a ellas deberán señalizarse adecuadamente y permanecerán siempre despejadas de cualquier obstáculo.", correct: true },
						{ C: "Todas las vías de evacuación disponibles y las puertas de acceso a ellas deberán señalizarse con la indicación 'vía de evacuación'.", correct: false },
						{ D: "Se atenderá con la mayor rapidez posible al desalojo de cualquier obstáculo que impida la salida por las vías de evacuación.", correct: false },
					],
				},
				{
					224: "En el plan de emergencias, la figura del jefe de emergencia:",
					Respuestas: [
						{ A: "Es la máxima autoridad en el establecimiento durante las emergencias.", correct: false },
						{ B: "Actuará desde el centro de control a la vista de las informaciones que reciba.", correct: false },
						{ C: "Poseerá sólidos conocimientos de seguridad contra incendios y del plan de autoprotección.", correct: false },
						{ D: "Todas las respuestas anteriores son correctas.", correct: true },
					],
				},
				{
					225: "Dentro de la clasificación estándar de los fuegos, ¿cuál es el tipo de agente extintor menos indicado en fuegos del tipo B?",
					Respuestas: [
						{ A: "De polvo seco.", correct: false },
						{ B: "De polvo polivalente.", correct: false },
						{ C: "De agua pulverizada.", correct: true },
						{ D: "De espuma física.", correct: false },
					],
				},
				{
					226: "En los extintores, la letra indica:",
					Respuestas: [
						{ A: "Clase de fuego.", correct: true },
						{ B: "Agente extintor.", correct: false },
						{ C: "Tamaño del fuego.", correct: false },
						{ D: "Capacidad del extintor.", correct: false },
					],
				},
				{
					227: "Ante un incendio:",
					Respuestas: [
						{ A: "Se cerrarán puertas y abrirán ventanas para evitar la expansión del humo y el fuego y su afectación a los pacientes y al personal.", correct: false },
						{ B: "Se mantendrá a los pacientes en sus habitaciones hasta la llegada de los bomberos.", correct: false },
						{ C: "Se está obligado a mantener la calma y hacerse cargo de la posible evacuación del centro hospitalario, si ésta se tuviera que realizar.", correct: true },
						{ D: "Todas las respuestas anteriores son falsas.", correct: false },
					],
				},
				{
					228: "El emplazamiento de los extintores portátiles será:",
					Respuestas: [
						{ A: "Próximo a los puntos de mayor probabilidad de incendio.", correct: true },
						{ B: "En función de la zona de trabajo de los celadores.", correct: false },
						{ C: "Acordados por la junta de personal.", correct: false },
						{ D: "Ninguna de las respuestas anteriores es correcta.", correct: false },
					],
				},
				{
					229: "En una emergencia general:",
					Respuestas: [
						{ A: "Se requiere ayuda externa.", correct: true },
						{ B: "No se requiere nunca ayuda externa.", correct: false },
						{ C: "Suele ser suficiente con la intervención de los equipos de alarma y evacuación propios.", correct: false },
						{ D: "Suele ser suficiente con la intervención de los equipos de primera intervención.", correct: false },
					],
				},
				{
					230: "Los extintores:",
					Respuestas: [
						{ A: "Son una instalación fija de agua.", correct: false },
						{ B: "Están conectados a una red exterior de agua.", correct: false },
						{ C: "Son medios portátiles de extinción de incendios.", correct: true },
						{ D: "Son medios fijos de extinción de incendios.", correct: false },
					],
				},
				{
					231: "En caso de incendio, ¿cuál es el mayor peligro?",
					Respuestas: [
						{ A: "El fuego.", correct: false },
						{ B: "El humo.", correct: true },
						{ C: "La confusión.", correct: false },
						{ D: "La evacuación.", correct: false },
					],
				},
				{
					232: "La situación en la que el riesgo o accidente que lo provoca, puede ser controlado de forma sencilla y rápida, es:",
					Respuestas: [
						{ A: "Emergencia final.", correct: false },
						{ B: "Emergencia parcial.", correct: false },
						{ C: "Emergencia general.", correct: false },
						{ D: "Conato.", correct: true },
					],
				},
				{
					233: "Para la aplicación de las normas de precauciones de aislamiento hay que tener en cuenta:",
					Respuestas: [
						{ A: "Sólo las precauciones específicas en función del mecanismo de transmisión del agente infeccioso: respiratorias, por gotas y por contacto.", correct: false },
						{ B: "Sólo las precauciones estándar.", correct: false },
						{ C: "Precauciones estándar y precauciones específicas.", correct: true },
						{ D: "Los aislamientos para enfermedades infecciosas.", correct: false },
					],
				},
				{
					234: "En la prevención de la infección hospitalaria se llaman precauciones universales:",
					Respuestas: [
						{ A: "Las medidas consensuadas científicamente en la mayoría de los países.", correct: false },
						{ B: "Las medidas que deben aplicarse en todas las enfermedades.", correct: false },
						{ C: "Las medidas que deben adoptarse en todos los usuarios, estén enfermos o no.", correct: true },
						{ D: "Todas las respuestas anteriores son correctas.", correct: false },
					],
				},
				{
					235: "Respecto a las precauciones a adoptar en los aislamientos para prevenir la transmisión por gotas de enfermedades infecciosas, señale cuál de ellas NO se considera correcta:",
					Respuestas: [
						{ A: "Ponerse una mascarilla al entrar a la habitación del paciente.", correct: false },
						{ B: "No es necesaria de forma rutinaria la protección para los ojos.", correct: false },
						{ C: "Se debe limitar el traslado del paciente fuera de la habitación a fines clínicamente necesarios.", correct: false },
						{ D: "Las habitaciones serán siempre y en todas las circunstancias individuales.", correct: true },
					],
				},
				{
					236: "¿Dónde se deben aplicar las precauciones estándar?",
					Respuestas: [
						{ A: "En los lugares más vulnerables de contraer una infección.", correct: false },
						{ B: "Solamente en los quirófanos.", correct: false },
						{ C: "En todos los puntos de atención.", correct: true },
						{ D: "Únicamente en la zona de urgencias, ya sea en atención primaria como en atención especializada, ya que es lugar de más tránsito de pacientes y usuarios.", correct: false },
					],
				},
				{
					237: "¿Las precauciones estándar recomiendan la higiene de manos?",
					Respuestas: [
						{ A: "No, no es una medida incluida en las precauciones estándar.", correct: false },
						{ B: "Si, la higiene de manos forma parte de las precauciones estándar.", correct: true },
						{ C: "Las precauciones estándar solo recomienda la utilización del EPI.", correct: false },
						{ D: "No, solo es necesario el uso de guantes que sustituye la higiene de manos.", correct: false },
					],
				},
				{
					238: "¿Cuál es la medida más eficaz para prevenir las infecciones relacionadas con la atención sanitaria?",
					Respuestas: [
						{ A: "Las precauciones estándar.", correct: false },
						{ B: "Las precauciones basadas en la vía de transmisión o precauciones específicas.", correct: false },
						{ C: "La higiene de manos.", correct: true },
						{ D: "Los aislamientos.", correct: false },
					],
				},
				{
					239: "En qué medida de precaución específica, basada en la vía de transmisión, NO es necesario el uso de mascarilla por parte del paciente cuando se realice un traslado fuera de la habitación:",
					Respuestas: [
						{ A: "Contacto.", correct: true },
						{ B: "Aéreo.", correct: false },
						{ C: "Gotas.", correct: false },
						{ D: "Todas las respuestas anteriores son correctas.", correct: false },
					],
				},
				{
					240: "Respecto a las precauciones a adoptar en los aislamientos para prevenir la transmisión por gotas de enfermedades infecciosas, señale cuál de ellas se considera correcta:",
					Respuestas: [
						{ A: "Al paciente siempre se le ubicará en una habitación individual.", correct: false },
						{ B: "El personal sanitario que entre en la habitación siempre usará bata impermeable.", correct: false },
						{ C: "Cuando la atención al paciente se realice igual o a menos de un metro será preciso el uso de mascarilla y gafas protectoras.", correct: true },
						{ D: "Todas las respuestas anteriores son correctas.", correct: false },
					],
				},
				{
					241: "¿Quiénes deberán aplicar las precauciones estándar?",
					Respuestas: [
						{ A: "Sólo los TCAE.", correct: false },
						{ B: "Sólo los enfermeros.", correct: false },
						{ C: "Sólo los celadores.", correct: false },
						{ D: "Todos los trabajadores sanitarios.", correct: true },
					],
				},
				{
					242: "De las siguientes medidas, ¿cuál de ellas incluiría en las precauciones estándar?",
					Respuestas: [
						{ A: "Utilización adecuada del equipo de protección individual.", correct: false },
						{ B: "Esterilización y desinfección del material clínico.", correct: false },
						{ C: "Higiene de manos.", correct: false },
						{ D: "Todas las respuestas anteriores son correctas.", correct: true },
					],
				},
				{
					243: "En relación a las precauciones a adoptar para prevenir la transmisión por vía aérea de enfermedades infecciosas, señale cuál de ellas es INCORRECTA:",
					Respuestas: [
						{ A: "La puerta de la habitación permanecerá cerrada.", correct: false },
						{ B: "Se podrá compartir habitación si los pacientes tienen igual diagnóstico, agente patógeno y genotipo.", correct: false },
						{ C: "Habitación individual con presión positiva.", correct: true },
						{ D: "El personal sanitario entrará en la habitación con la mascarilla puesta.", correct: false },
					],
				},
				{
					244: "El denominado aislamiento protector o inverso se emplea en:",
					Respuestas: [
						{ A: "Pacientes contagiosos por vía respiratoria.", correct: false },
						{ B: "Pacientes con enfermedades digestivas contagiosas.", correct: false },
						{ C: "Pacientes que permanecen aislados en su propia casa.", correct: false },
						{ D: "Pacientes que tienen disminuidas gravemente sus defensas.", correct: true },
					],
				},
				{
					245: "Son seres inanimados, contaminados a partir de la fuente de infección, que transmiten enfermedades:",
					Respuestas: [
						{ A: "Fómites.", correct: true },
						{ B: "Vectores.", correct: false },
						{ C: "Artrópodos.", correct: false },
						{ D: "Invertebrados.", correct: false },
					],
				},
				{
					246: "Al conjunto de las medidas utilizadas para prevenir la diseminación de infecciones a los pacientes, al personal sanitario, a los visitantes y al medio ambiente sanitario se denomina:",
					Respuestas: [
						{ A: "Técnicas de higiene.", correct: false },
						{ B: "Técnicas de limpieza.", correct: false },
						{ C: "Técnicas de aislamiento.", correct: true },
						{ D: "Técnicas de esterilización.", correct: false },
					],
				},
				{
					247: "En el hospital se ha establecido una zona de aislamiento entérico. ¿Qué incluye el protocolo para este tipo de aislamiento? Señale la respuesta INCORRECTA:",
					Respuestas: [
						{ A: "Lavado de manos.", correct: false },
						{ B: "Uso de guantes cuando haya contacto directo con el paciente o fómites.", correct: false },
						{ C: "Uso de mascarilla.", correct: true },
						{ D: "Dentro de la habitación habrá guantes y batas.", correct: false },
					],
				},
				{
					248: "La infección que se presenta en un paciente internado en un hospital en quien la infección no se había manifestado ni estaba en período de incubación en el momento del internamiento, se denomina:",
					Respuestas: [
						{ A: "Infección parasitaria.", correct: false },
						{ B: "Infección oportunista.", correct: false },
						{ C: "Infección nosocomial.", correct: true },
						{ D: "Infección diferida.", correct: false },
					],
				},
				{
					249: "¿Cuál es la finalidad del aislamiento protector?",
					Respuestas: [
						{ A: "Evitar el contagio tanto por vía directa como indirecta.", correct: false },
						{ B: "Aislar a los pacientes susceptibles o inmunodeprimidos.", correct: true },
						{ C: "Prevenir el contagio por vía aérea.", correct: false },
						{ D: "Proteger frente a infecciones cruzadas.", correct: false },
					],
				},
				{
					250: "¿Cómo actúa el suelo en los mecanismos de transmisión de las enfermedades?",
					Respuestas: [
						{ A: "Como vector.", correct: false },
						{ B: "Como reservorio.", correct: true },
						{ C: "Como fuente de infección.", correct: false },
						{ D: "Como fómite.", correct: false },
					],
				},
				{
					251: "¿Qué aislamiento requieren los pacientes quemados en más de un 25% de su superficie corporal?",
					Respuestas: [
						{ A: "Aislamiento de contacto.", correct: false },
						{ B: "Aislamiento estricto.", correct: false },
						{ C: "Aislamiento respiratorio.", correct: false },
						{ D: "Aislamiento protector.", correct: true },
					],
				},
				{
					252: "¿Cómo se llama el lugar donde los microorganismos viven, se desarrollan y se multiplican indefinidamente?",
					Respuestas: [
						{ A: "Fuente susceptible.", correct: false },
						{ B: "Vector.", correct: false },
						{ C: "Reservorio.", correct: true },
						{ D: "Infestación.", correct: false },
					],
				},
				{
					253: "¿Cuál de las siguientes medidas se deben tomar ante un paciente sujeto a un aislamiento por gotas de Flügge?",
					Respuestas: [
						{ A: "El uso de la mascarilla no es necesario.", correct: false },
						{ B: "El uso de la mascarilla cuando se esté trabajando a menos de 1 metro del paciente.", correct: true },
						{ C: "En los traslados el paciente no llevará la mascarilla.", correct: false },
						{ D: "La eliminación de los residuos en bolsas o contenedores no identificados.", correct: false },
					],
				},
				{
					254: "Un paciente que está en una planta de hospitalización con aislamiento de contacto, ¿cuál de las siguientes indicaciones es la más adecuada?",
					Respuestas: [
						{ A: "El celador deberá llevar puestos los guantes cuando entre en la habitación del paciente aislado.", correct: true },
						{ B: "El celador llevará puesta la mascarilla siempre que vaya a entrar en la habitación del paciente aislado.", correct: false },
						{ C: "No es preciso lavarse las manos después de quitarse los guantes usados.", correct: false },
						{ D: "El celador no puede entrar en la habitación de un paciente con aislamiento.", correct: false },
					],
				},
				{
					255: "Señale cuál de los siguientes medios técnicos asistenciales no es propio del servicio de urgencias:",
					Respuestas: [
						{ A: "Laringoscopio y tubos endotraqueales.", correct: false },
						{ B: "Desfibrilador cardíaco con sincronizador.", correct: true },
						{ C: "Equipos para drenajes pleurales y pericárdicos.", correct: false },
						{ D: "Fonendoscopio.", correct: false },
					],
				},
				{
					256: "Cuando un celador está trasladando a un parapléjico a urgencias y éste empieza a vomitar, el celador:",
					Respuestas: [
						{ A: "Avisará rápidamente al familiar.", correct: false },
						{ B: "Le girará la cabeza para evitar una aspiración, y avisará al personal sanitario.", correct: true },
						{ C: "Llamará al servicio de limpieza.", correct: false },
						{ D: "Lo trasladará rápidamente a los aseos para que vomite allí.", correct: false },
					],
				},
				{
					257: "Cuando se permita la entrada al área sanitaria de urgencias a los familiares de un paciente para una visita puntual el celador deberá:",
					Respuestas: [
						{ A: "Indicarle brevemente donde está el paciente y continuar con sus tareas.", correct: false },
						{ B: "Valorar si están muy nerviosos y pueden ver o no al paciente.", correct: false },
						{ C: "Cuidar para que no deambulen por los pasillos más de lo necesario para llegar al lugar concreto donde esté el paciente.", correct: true },
						{ D: "Comentar con los familiares el estado de salud del paciente.", correct: false },
					],
				},
				{
					258: "Cuál de las siguientes es una zona o área asistencial de la unidad de urgencias:",
					Respuestas: [
						{ A: "Almacén.", correct: false },
						{ B: "Sala de espera.", correct: false },
						{ C: "Quirófanos de urgencias.", correct: true },
						{ D: "Sala de información a pacientes.", correct: false },
					],
				},
				{
					259: "¿Qué es una urgencia?",
					Respuestas: [
						{ A: "La asistencia que se presta solamente en caso de catástrofe.", correct: false },
						{ B: "Toda actividad que genera la conciencia de atención inminente.", correct: true },
						{ C: "No implica una necesidad apremiante.", correct: false },
						{ D: "Ninguna de las respuestas anteriores es correcta.", correct: false },
					],
				},
				{
					260: "Son funciones del celador destinado en el servicio de urgencias todas, EXCEPTO:",
					Respuestas: [
						{ A: "Vigilarán la entrada, permitiendo el acceso sólo a las personas autorizadas para ello.", correct: false },
						{ B: "Avisarán al personal sanitario cuando sea necesario.", correct: false },
						{ C: "Avisarán, vía telefónica, al servicio de ambulancia cuando sea preciso un traslado secundario.", correct: true },
						{ D: "Avisarán a los familiares de los pacientes que se encuentren en la sala de espera, cuando se realice el ingreso del enfermo en planta hospitalaria.", correct: false },
					],
				},
				{
					261: "Aquella situación urgente que pone en peligro inmediato la vida del paciente o la función del algún órgano es una:",
					Respuestas: [
						{ A: "Urgencia.", correct: false },
						{ B: "Emergencia.", correct: true },
						{ C: "Cadena asistencial urgente.", correct: false },
						{ D: "Catástrofe sanitaria.", correct: false },
					],
				},
				{
					262: "La persona encargada de la recepción de los pacientes en urgencias hospitalarias es:",
					Respuestas: [
						{ A: "El administrativo.", correct: false },
						{ B: "El celador.", correct: true },
						{ C: "El enfermero de triaje.", correct: false },
						{ D: "El médico de guardia.", correct: false },
					],
				},
				{
					263: "Entre las ventajas del sistema de triaje, en la identificación y estadiaje de las víctimas de una catástrofe es cierto que:",
					Respuestas: [
						{ A: "Aumenta la eficacia de la atención al paciente.", correct: false },
						{ B: "Proporciona información sobre el estado del paciente y el tiempo aproximado de espera en la atención.", correct: false },
						{ C: "Orienta el flujo de pacientes en función de su gravedad.", correct: false },
						{ D: "Todas las respuestas anteriores son correctas.", correct: true },
					],
				},
				{
					264: "¿Cuál de estas actuaciones del celador de urgencias es la incorrecta?",
					Respuestas: [
						{ A: "Recepción de pacientes.", correct: false },
						{ B: "Asistencia y apoyo al personal sanitario.", correct: false },
						{ C: "Organización de las ambulancias.", correct: true },
						{ D: "Vigilancia.", correct: false },
					],
				},
				{
					265: "El celador en el servicio de urgencias:",
					Respuestas: [
						{ A: "Recibe a los enfermos que acuden al servicio de urgencias en ambulancias, vehículos particulares y ambulantes.", correct: false },
						{ B: "Facilita información general, si así se lo solicitan, a enfermos y familiares acerca de la ubicación de la sala de espera, los aseos o del servicio de admisión de urgencias, pero nunca información sanitaria ni administrativa.", correct: false },
						{ C: "Recibe al enfermo y comienza a hacer la anamnesis del paciente.", correct: false },
						{ D: "Las respuestas A y B son correctas.", correct: true },
					],
				},
				{
					266: "En la recepción de pacientes en la entrada de urgencias, ¿cuál de las siguientes actuaciones es INCORRECTA?",
					Respuestas: [
						{ A: "Recibir y ofrecer ayuda a los enfermos que acuden al servicio de urgencias en ambulancias, vehículos particulares y ambulantes.", correct: false },
						{ B: "Dar aviso urgente al personal sanitario de la llegada de un paciente al servicio de urgencias cuando su patología evidencie signos externos de requerir una atención inmediata.", correct: false },
						{ C: "Exclusivamente se transportará aquel paciente que vaya en silla de ruedas.", correct: true },
						{ D: "Tener localizadas y disponibles sillas de ruedas, camillas y camas hospitalarias para los enfermos, así como las balas de oxígeno, y todos en perfecto estado y listos para su uso.", correct: false },
					],
				},
				{
					267: "De las siguientes funciones de celadores de urgencias, ¿cuál es la respuesta INCORRECTA?",
					Respuestas: [
						{ A: "En los periodos de descanso legalmente establecidos y se abandone transitoriamente el servicio, no es necesario que se lo comunique a su compañero.", correct: true },
						{ B: "Deberán comunicar al responsable (supervisor/a) las averías en las sillas de ruedas, porta-sueros, camillas, etc.", correct: false },
						{ C: "Deberán dar cuenta a sus inmediatos superiores de los desperfectos o anomalías que encuentren en la limpieza y conservación del edificio y del material.", correct: false },
						{ D: "Los celadores serán responsables del manejo y custodia de las sillas de ruedas, porta-sueros, camillas, etc. Igualmente serán responsables de su localización.", correct: false },
					],
				},
				{
					268: "En el servicio de urgencias, ante la llegada de un paciente crítico y una vez estabilizado éste, el celador debe:",
					Respuestas: [
						{ A: "Acompañar al facultativo en la información al estado del paciente.", correct: false },
						{ B: "Informar a los familiares del estado del paciente, porque así se lo ha ordenado el facultativo ya que éste no puede hacerlo debido a la urgencia de la patología.", correct: false },
						{ C: "No debe hacer nada puesto que el paciente ya está estabilizado.", correct: false },
						{ D: "Debe permanecer atento en la sala hasta que el personal sanitario lo considere oportuno.", correct: true },
					],
				},
				{
					269: "Es una función del celador de urgencias:",
					Respuestas: [
						{ A: "Avisar al servicio de ambulancia para traslado de enfermos dados de alta.", correct: false },
						{ B: "Contención de un paciente mientras se le practica un lavado gástrico.", correct: true },
						{ C: "Obtener la información necesaria de los familiares del paciente para poder abrirle la historia clínica.", correct: false },
						{ D: "Realizar la clasificación inicial de pacientes en la zona de triaje.", correct: false },
					],
				},
				{
					270: "¿Cuál de las siguientes opciones no comprende la asistencia sanitaria prestada por una unidad de urgencias de hospital?",
					Respuestas: [
						{ A: "Asistencia en urgencias y alta al domicilio.", correct: false },
						{ B: "Permanencia en cama en sala de observación durante un máximo de 24 horas.", correct: false },
						{ C: "Internamiento en unidad de hospitalización.", correct: false },
						{ D: "Asistencia urgente domiciliaria.", correct: true },
					],
				},
				{
					271: "¿Cuál de las siguientes NO es una función que corresponde realizar al celador de una unidad de urgencias de hospital?",
					Respuestas: [
						{ A: "Permitir el acceso sólo a personas autorizadas para ello.", correct: false },
						{ B: "Tomar los datos personales y de derecho de asistencia sanitaria al paciente.", correct: true },
						{ C: "Cuidar de que los pasillos permanezcan despejados de público.", correct: false },
						{ D: "Traslado de fallecidos desde urgencias hasta el tanatorio del hospital.", correct: false },
					],
				},
				{
					272: "En el contexto de las fases del decálogo prehospitalario, ¿a qué se denomina triaje?",
					Respuestas: [
						{ A: "Al conjunto de maniobras de reanimación indispensables que hacen posible la supervivencia de un paciente.", correct: false },
						{ B: "A la puesta en marcha del sistema de emergencias.", correct: false },
						{ C: "Al conjunto de actuaciones dirigidas a conseguir que las funciones ventilatorias y hemodinámicas estén aseguradas durante el traslado.", correct: false },
						{ D: "A la clasificación de los pacientes.", correct: true },
					],
				},
				{
					273: "Cuál de las siguientes NO es una zona o área de trabajo de la unidad de urgencias:",
					Respuestas: [
						{ A: "Despachos de responsables médicos y de enfermería.", correct: false },
						{ B: "Área de espera de pacientes y acompañantes.", correct: false },
						{ C: "Hospitalización del paciente.", correct: true },
						{ D: "Área de boxes.", correct: false },
					],
				},
				{
					274: "Una persona acude al servicio de urgencias diciendo que en el exterior del centro hay una persona en el suelo que necesita ayuda urgente. En este caso el celador, señale la opción CORRECTA:",
					Respuestas: [
						{ A: "Facilitará una camilla para trasladar al enfermo.", correct: false },
						{ B: "Dirá a dicha persona que lo acerque para que lo vea el médico.", correct: false },
						{ C: "Indicará que vaya al servicio de urgencias.", correct: false },
						{ D: "Se cerciorará de los hechos e informará de inmediato al personal sanitario, siguiendo sus instrucciones para trasladar al paciente.", correct: true },
					],
				},
				{
					275: "El triaje es:",
					Respuestas: [
						{ A: "Elegir.", correct: false },
						{ B: "Clasificar.", correct: false },
						{ C: "Colaborar.", correct: false },
						{ D: "Las respuestas A y B son correctas.", correct: true },
					],
				},
				{
					276: "En la puerta de urgencia de un hospital, entra un accidentado con una sospecha de fractura en el brazo, el dispositivo que se utiliza para inmovilizar lesiones, fracturas o desplazamientos de una parte del cuerpo, se llama:",
					Respuestas: [
						{ A: "Tracción.", correct: false },
						{ B: "Férula.", correct: true },
						{ C: "Cabestrillo.", correct: false },
						{ D: "Inmovilización.", correct: false },
					],
				},
				{
					277: "Normalmente un celador de urgencias cuando lleva a un enfermo a una planta, señale la respuesta CORRECTA:",
					Respuestas: [
						{ A: "Ayuda al celador de planta a trasladar a otro enfermo.", correct: false },
						{ B: "Se queda en la habitación vigilando hasta recibir nuevas instrucciones.", correct: false },
						{ C: "Ayuda a encamar al enfermo y/o vuelve a su sitio inicial de urgencias.", correct: true },
						{ D: "Comunica al celador de planta la medicación que le han propuesto.", correct: false },
					],
				},
				{
					278: "Se denomina transporte aéreo a:",
					Respuestas: [
						{ A: "Al transporte que se realiza desde el lugar donde se produce la necesidad de asistencia hasta el hospital o centro de atención de referencia del paciente.", correct: false },
						{ B: "Al transporte del paciente desde un centro sanitario a otro para que le realicen una prueba diagnóstica o para que permanezca en ese centro.", correct: false },
						{ C: "Al transporte del paciente desde un servicio a otro dentro del mismo hospital para que le realicen una prueba o le cambien de unidad.", correct: false },
						{ D: "Al transporte que se realiza utilizando medios especiales de transporte como un helicóptero.", correct: true },
					],
				},
				{
					279: "El transporte sanitario:",
					Respuestas: [
						{ A: "Es el que se realiza para el desplazamiento de personas enfermas, accidentadas o por otra razón sanitaria.", correct: false },
						{ B: "Es el que se realiza en vehículos no dispuestos para el desplazamiento de personas enfermas, accidentadas o por otra razón sanitaria, siendo una prestación complementaria del Sistema Nacional de Salud.", correct: false },
						{ C: "Es el que se realiza en vehículos especialmente acondicionados para el desplazamiento de personas enfermas, accidentadas o por otra razón sanitaria.", correct: false },
						{ D: "Las respuestas A y C son correctas.", correct: true },
					],
				},
				{
					280: "Las ambulancias acondicionadas para el transporte de enfermos, destinadas a proporcionar soporte vital avanzado, son:",
					Respuestas: [
						{ A: "Ambulancias de clase A1.", correct: false },
						{ B: "Ambulancias de clase A2.", correct: false },
						{ C: "Ambulancias de clase B.", correct: false },
						{ D: "Ambulancias de clase C.", correct: true },
					],
				},
				{
					281: "Dentro del equipamiento para el transporte sanitario medicalizado y de urgencias, el colchón de vacío es un material:",
					Respuestas: [
						{ A: "De oxigenoterapia.", correct: false },
						{ B: "Quirúrgico.", correct: false },
						{ C: "Cardiovascular.", correct: false },
						{ D: "Traumatológico.", correct: true },
					],
				},
				{
					282: "Los servicios de transporte sanitario podrán prestarse por:",
					Respuestas: [
						{ A: "Vehículos adecuados para el traslado individual de enfermos en camilla, dotados o no de equipamientos que permitan medidas asistenciales.", correct: false },
						{ B: "Vehículos acondicionados para el transporte colectivo de enfermos no aquejados de enfermedades transmisibles.", correct: false },
						{ C: "Vehículos adecuados para el traslado individual de enfermos en camilla, dotados de equipamientos que permitan medidas asistenciales, o con vehículos acondicionados para el transporte colectivo de enfermos aquejados de enfermedades transmisibles.", correct: false },
						{ D: "Las respuestas A y B son correctas.", correct: true },
					],
				},
				{
					283: "En relación a las exigencias que deben cumplir los vehículos de transporte sanitario, señale la respuesta CORRECTA:",
					Respuestas: [
						{ A: "Deberán tener señalización luminosa y acústica de preferencia de paso inadecuada a los dispuesto en la reglamentación vigente.", correct: false },
						{ B: "Identificación exterior que permita distinguir claramente que se trata de una ambulancia, mediante la inscripción de la palabra 'Ambulancia' detrás y delante. La inscripción delantera se realizará en sentido directo para que pueda ser leído por reflexión.", correct: false },
						{ C: "Registro de desinfecciones del habitáculo y del equipamiento.", correct: true },
						{ D: "Todas las respuestas anteriores son correctas.", correct: false },
					],
				},
				{
					284: "Entre los diferentes tipos de vehículos de transporte sanitario que existen, distinguimos:",
					Respuestas: [
						{ A: "Ambulancias asistenciales.", correct: false },
						{ B: "Vehículos de traslado colectivo sanitario.", correct: false },
						{ C: "Vehículos con equipos especiales básicos.", correct: false },
						{ D: "Las respuestas A y B son correctas.", correct: true },
					],
				},
				{
					285: "En las unidades terrestres de soporte vital avanzado, parte de su material de oxigenoterapia, serían aparatos de ventilación manual, para:",
					Respuestas: [
						{ A: "Adultos y niños.", correct: false },
						{ B: "Adultos y recién nacidos.", correct: false },
						{ C: "Adultos, niños y recién nacidos.", correct: true },
						{ D: "Adultos.", correct: false },
					],
				},
				{
					286: "Los equipos de radio anclados en vehículos, serían de tipo:",
					Respuestas: [
						{ A: "Base.", correct: false },
						{ B: "Móvil.", correct: true },
						{ C: "Portátil.", correct: false },
						{ D: "Alámbricos.", correct: false },
					],
				},
				{
					287: "Cuál de las siguientes medicaciones, NO suele llevarse como tratamiento en la medicación de emergencia:",
					Respuestas: [
						{ A: "Analgésicos.", correct: false },
						{ B: "Antihistamínicos.", correct: false },
						{ C: "Antiácidos.", correct: true },
						{ D: "Vitaminas.", correct: false },
					],
				},
				{
					288: "Las ambulancias de soporte vital avanzado deberán contar con el siguiente personal:",
					Respuestas: [
						{ A: "Dos celadores – conductores.", correct: false },
						{ B: "Un celador - conductor y un enfermero.", correct: false },
						{ C: "Un celador - conductor y un médico.", correct: true },
						{ D: "Un celador - conductor y un médico.", correct: true },
					],
				},
				{
					289: "Es obligación del celador - conductor la comprobación del funcionamiento de la señalización luminosa y acústica de preferencia de paso:",
					Respuestas: [
						{ A: "No, esa función es del mecánico electricista.", correct: false },
						{ B: "Sí.", correct: true },
						{ C: "No, nunca.", correct: false },
						{ D: "A veces.", correct: false },
					],
				},
				{
					290: "Es competencia del celador - conductor comprobar la presión de los neumáticos antes de empezar la guardia:",
					Respuestas: [
						{ A: "Depende de la duración de la guardia.", correct: false },
						{ B: "No, nunca.", correct: false },
						{ C: "Sí.", correct: true },
						{ D: "Depende del tamaño del neumático.", correct: false },
					],
				},
				{
					291: "¿Cuándo tendrán prioridad de paso los vehículos de servicio de urgencia?",
					Respuestas: [
						{ A: "Siempre.", correct: false },
						{ B: "Nunca.", correct: false },
						{ C: "Cuando se hallen en servicio de urgencia.", correct: true },
						{ D: "Cuando se hallen en servicio de urgencia los vehículos públicos.", correct: false },
					],
				},
				{
					292: "¿Cómo debe efectuarse el estacionamiento de los vehículos de asistencia sanitaria?",
					Respuestas: [
						{ A: "De forma que no cree un nuevo peligro.", correct: false },
						{ B: "Es indiferente ya que son vehículos que tienen preferencia en todo caso.", correct: false },
						{ C: "Donde causen menor obstáculo a la circulación.", correct: false },
						{ D: "Las preguntas A y C son correctas.", correct: true },
					],
				},
				{
					293: "¿Los vehículos de servicio de urgencia podrán circular por encima de los límites de velocidad?",
					Respuestas: [
						{ A: "Si.", correct: false },
						{ B: "No.", correct: false },
						{ C: "Si, cuando se hallen en servicio de urgencia.", correct: true },
						{ D: "Si, solo cuando circulen por vía urbana.", correct: false },
					],
				},
				{
					294: "El celador/a - conductor/a:",
					Respuestas: [
						{ A: "No dará información sobre su enfermedad a los enfermos o familiares, se les debe recomendar que hablen con su médico.", correct: true },
						{ B: "Podrá informar al enfermo como cualquier profesional.", correct: false },
						{ C: "Es obligación informar al enfermo cuando lo pida y también a sus familiares.", correct: false },
						{ D: "No podrá hablar nunca con los enfermos, sobre ningún tema.", correct: false },
					],
				},
				{
					295: "En el equipamiento para soporte vital avanzado, dentro del material de oxigenoterapia, estaría:",
					Respuestas: [
						{ A: "Laringoscopio con palas.", correct: false },
						{ B: "Ambú.", correct: false },
						{ C: "Mascarilla de ventilación.", correct: false },
						{ D: "Todas las respuestas son correctas.", correct: true },
					],
				},
				{
					296: "Entre las funciones del celador/a - conductor/a está:",
					Respuestas: [
						{ A: "Tramitar sin tardanza los objetos que les sean confiados por sus superiores.", correct: false },
						{ B: "Cuidar de que los enfermos no hagan uso indebido de los enseres de la institución.", correct: false },
						{ C: "Trasladar a los enfermos en el servicio ambulancia.", correct: false },
						{ D: "Todas son correctas.", correct: true },
					],
				},
				{
					297: "¿Debe un vehículo de transporte sanitario colectivo llevar entre su dotación un chaleco reflectante de alta visibilidad?",
					Respuestas: [
						{ A: "No, la normativa que regula este tipo de vehículos no lo contempla.", correct: false },
						{ B: "Sí, conforme a la legislación de tráfico, circulación de vehículos a motor y seguridad vial.", correct: true },
						{ C: "No, pues no se trata de una ambulancia asistencial.", correct: false },
						{ D: "Todas las opciones anteriores son incorrectas.", correct: false },
					],
				},
				{
					298: "Señale la afirmación CORRECTA:",
					Respuestas: [
						{ A: "Las ambulancias asistenciales deben estar acondicionadas para proporcionar al menos soporte vital avanzado.", correct: false },
						{ B: "Las ambulancias de transporte colectivo deben estar acondicionadas para el traslado de personas aquejadas de enfermedades infecto-contagiosas.", correct: false },
						{ C: "La identificación exterior que permita distinguir que se trata de una ambulancia es una característica común a todo tipo de ambulancias.", correct: true },
						{ D: "Los faros antiniebla posteriores son optativos para las ambulancias de transporte sanitario colectivo.", correct: false },
					],
				},
				{
					299: "¿Para qué se usa la camilla 'de cuchara o de tijera'?",
					Respuestas: [
						{ A: "Para inmovilizar al paciente.", correct: false },
						{ B: "No existe esa camilla, se llama camilla en H.", correct: false },
						{ C: "En situaciones de difícil acceso.", correct: false },
						{ D: "Para el traslado del enfermo desde el lugar del accidente hasta su medio de transporte.", correct: true },
					],
				},
				{
					300: "La posición correcta para trasladar una embarazada con hemorragia vaginal es:",
					Respuestas: [
						{ A: "Trendelenburg.", correct: true },
						{ B: "Decúbito lateral izquierdo.", correct: false },
						{ C: "Decúbito lateral derecho.", correct: false },
						{ D: "Semisedestación.", correct: false },
					],
				},

			],
			preguntasFalladas: []
		},
		actions: {
			getPreguntasFalladas: () => {
				let fallos = localStorage.getItem("fallos")
				const store = getStore()
				if (!fallos) {
					localStorage.setItem("fallos", JSON.stringify([]))
				}
				else {
					setStore({ preguntasFalladas: JSON.parse(fallos) })
				}
			}

		}
	};
};

export default getState;
