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
				}

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
