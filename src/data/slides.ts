export interface SectionMeta {
  id: number;
  title: string;
  expectedWordCount: number | null;
  startSlide: number;
  endSlide: number;
}

export interface Slide {
  id: number;
  sectionId: number;
  sectionTitle: string;
  expectedWordCount: number | null;
  spanish: string;
  english: string;
}

export const SECTIONS: SectionMeta[] = [
  {
    id: 1,
    title: 'Section 1 — Affirmative Imperatives (1 Word)',
    expectedWordCount: 1,
    startSlide: 1,
    endSlide: 15,
  },
  {
    id: 2,
    title: 'Section 2 — Affirmative Imperatives (2 Words)',
    expectedWordCount: 2,
    startSlide: 16,
    endSlide: 30,
  },
  {
    id: 3,
    title: 'Section 3 — Affirmative Imperatives (3 Words)',
    expectedWordCount: 3,
    startSlide: 31,
    endSlide: 45,
  },
  {
    id: 4,
    title: 'Section 4 — Affirmative Imperatives (4 Words)',
    expectedWordCount: 4,
    startSlide: 46,
    endSlide: 60,
  },
  {
    id: 5,
    title: 'Section 5 — Negative Imperatives (2 Words)',
    expectedWordCount: 2,
    startSlide: 61,
    endSlide: 75,
  },
  {
    id: 6,
    title: 'Section 6 — Negative Imperatives (3 Words)',
    expectedWordCount: 3,
    startSlide: 76,
    endSlide: 90,
  },
  {
    id: 7,
    title: 'Section 7 — Negative Imperatives (4 Words)',
    expectedWordCount: 4,
    startSlide: 91,
    endSlide: 105,
  },
  {
    id: 8,
    title: 'Section 8 — Negative Imperatives (5 Words)',
    expectedWordCount: 5,
    startSlide: 106,
    endSlide: 120,
  },
  {
    id: 9,
    title: "Section 9 — Let's Imperatives (4 Words)",
    expectedWordCount: 4,
    startSlide: 121,
    endSlide: 135,
  },
  {
    id: 10,
    title: "Section 10 — Let's Imperatives (5 Words)",
    expectedWordCount: 5,
    startSlide: 136,
    endSlide: 150,
  },
  {
    id: 11,
    title: 'Section 11 — Mixed Imperatives',
    expectedWordCount: null,
    startSlide: 151,
    endSlide: 200,
  },
];

interface RawSlideEntry {
  sectionId: number;
  spanish: string;
  english: string;
}

const RAW_SLIDES: RawSlideEntry[] = [
  // Section 1 — Affirmative Imperatives (1 Word) [1–15]
  { sectionId: 1, spanish: '¡Escucha!', english: 'Listen!' },
  { sectionId: 1, spanish: '¡Mira!', english: 'Look!' },
  { sectionId: 1, spanish: '¡Ven!', english: 'Come!' },
  { sectionId: 1, spanish: '¡Espera!', english: 'Wait!' },
  { sectionId: 1, spanish: '¡Siéntate!', english: 'Sit!' },
  { sectionId: 1, spanish: '¡Levántate!', english: 'Stand!' },
  { sectionId: 1, spanish: '¡Abre!', english: 'Open!' },
  { sectionId: 1, spanish: '¡Cierra!', english: 'Close!' },
  { sectionId: 1, spanish: '¡Entra!', english: 'Enter!' },
  { sectionId: 1, spanish: '¡Sal!', english: 'Leave!' },
  { sectionId: 1, spanish: '¡Corre!', english: 'Run!' },
  { sectionId: 1, spanish: '¡Camina!', english: 'Walk!' },
  { sectionId: 1, spanish: '¡Habla!', english: 'Speak!' },
  { sectionId: 1, spanish: '¡Lee!', english: 'Read!' },
  { sectionId: 1, spanish: '¡Escribe!', english: 'Write!' },

  // Section 2 — Affirmative Imperatives (2 Words) [16–30]
  { sectionId: 2, spanish: '¡Ven aquí!', english: 'Come here!' },
  { sectionId: 2, spanish: '¡Mira esto!', english: 'Watch this!' },
  { sectionId: 2, spanish: '¡Siéntate aquí!', english: 'Sit here!' },
  { sectionId: 2, spanish: '¡Ponte de pie!', english: 'Stand up!' },
  { sectionId: 2, spanish: '¡Pasa adentro!', english: 'Come inside!' },
  { sectionId: 2, spanish: '¡Camina despacio!', english: 'Walk slowly!' },
  { sectionId: 2, spanish: '¡Habla claro!', english: 'Speak clearly!' },
  { sectionId: 2, spanish: '¡Lee esto!', english: 'Read this!' },
  { sectionId: 2, spanish: '¡Escribe eso!', english: 'Write that!' },
  { sectionId: 2, spanish: '¡Limpia esto!', english: 'Clean this!' },
  { sectionId: 2, spanish: '¡Presta atención!', english: 'Pay attention!' },
  { sectionId: 2, spanish: '¡Guarda silencio!', english: 'Stay quiet!' },
  { sectionId: 2, spanish: '¡Trae agua!', english: 'Bring water!' },
  { sectionId: 2, spanish: '¡Sirve café!', english: 'Serve coffee!' },
  { sectionId: 2, spanish: '¡Ten cuidado!', english: 'Be careful!' },

  // Section 3 — Affirmative Imperatives (3 Words) [31–45]
  { sectionId: 3, spanish: '¡Abre la puerta!', english: 'Open the door!' },
  { sectionId: 3, spanish: '¡Cierra la ventana!', english: 'Close the window!' },
  { sectionId: 3, spanish: '¡Lava tus manos!', english: 'Wash your hands!' },
  { sectionId: 3, spanish: '¡Limpia la mesa!', english: 'Clean the table!' },
  { sectionId: 3, spanish: '¡Prepara el café!', english: 'Prepare the coffee!' },
  { sectionId: 3, spanish: '¡Abre tu cuaderno!', english: 'Open your notebook!' },
  { sectionId: 3, spanish: '¡Mira hacia adelante!', english: 'Look straight ahead!' },
  { sectionId: 3, spanish: '¡Escucha muy atentamente!', english: 'Listen very carefully!' },
  { sectionId: 3, spanish: '¡Repite esta oración!', english: 'Repeat this sentence!' },
  { sectionId: 3, spanish: '¡Lee en voz alta!', english: 'Read out loud!' },
  { sectionId: 3, spanish: '¡Escribe tu nombre!', english: 'Write your name!' },
  { sectionId: 3, spanish: '¡Levanta la mano!', english: 'Raise your hand!' },
  { sectionId: 3, spanish: '¡Toma el pedido!', english: 'Take the order!' },
  { sectionId: 3, spanish: '¡Trae los platos!', english: 'Bring the plates!' },
  { sectionId: 3, spanish: '¡Cierra tu libro!', english: 'Close your book!' },

  // Section 4 — Affirmative Imperatives (4 Words) [46–60]
  { sectionId: 4, spanish: '¡Escucha al instructor!', english: 'Listen to the instructor!' },
  { sectionId: 4, spanish: '¡Coloca el libro aquí!', english: 'Put the book here!' },
  { sectionId: 4, spanish: '¡Limpia todas las mesas!', english: 'Clean all the tables!' },
  { sectionId: 4, spanish: '¡Sirve el desayuno ahora!', english: 'Serve the breakfast now!' },
  { sectionId: 4, spanish: '¡Escribe la fecha hoy!', english: 'Write the date today!' },
  { sectionId: 4, spanish: '¡Trae un vaso limpio!', english: 'Bring a clean glass!' },
  { sectionId: 4, spanish: '¡Abre el menú ahora!', english: 'Open the menu now!' },
  { sectionId: 4, spanish: '¡Practica con tu compañero!', english: 'Practice with your partner!' },
  { sectionId: 4, spanish: '¡Lee la siguiente página!', english: 'Read the next page!' },
  { sectionId: 4, spanish: '¡Responde esta pregunta ahora!', english: 'Answer this question now!' },
  { sectionId: 4, spanish: '¡Pon las servilletas allí!', english: 'Put the napkins there!' },
  { sectionId: 4, spanish: '¡Llena la jarra grande!', english: 'Fill the large pitcher!' },
  { sectionId: 4, spanish: '¡Entrega la cuenta rápido!', english: 'Deliver the check quickly!' },
  { sectionId: 4, spanish: '¡Revisa tus notas primero!', english: 'Check your notes first!' },
  { sectionId: 4, spanish: '¡Saluda cortésmente a los huéspedes!', english: 'Greet the guests politely!' },

  // Section 5 — Negative Imperatives (2 Words) [61–75]
  { sectionId: 5, spanish: '¡No corras!', english: "Don't run!" },
  { sectionId: 5, spanish: '¡No hables!', english: "Don't talk!" },
  { sectionId: 5, spanish: '¡No grites!', english: "Don't shout!" },
  { sectionId: 5, spanish: '¡No toques!', english: "Don't touch!" },
  { sectionId: 5, spanish: '¡No fumes!', english: "Don't smoke!" },
  { sectionId: 5, spanish: '¡No llores!', english: "Don't cry!" },
  { sectionId: 5, spanish: '¡No mires!', english: "Don't look!" },
  { sectionId: 5, spanish: '¡No salgas!', english: "Don't leave!" },
  { sectionId: 5, spanish: '¡No entres!', english: "Don't enter!" },
  { sectionId: 5, spanish: '¡No pares!', english: "Don't stop!" },
  { sectionId: 5, spanish: '¡No olvides!', english: "Don't forget!" },
  { sectionId: 5, spanish: '¡No esperes!', english: "Don't wait!" },
  { sectionId: 5, spanish: '¡No duermas!', english: "Don't sleep!" },
  { sectionId: 5, spanish: '¡No saltes!', english: "Don't jump!" },
  { sectionId: 5, spanish: '¡No mientas!', english: "Don't lie!" },

  // Section 6 — Negative Imperatives (3 Words) [76–90]
  { sectionId: 6, spanish: '¡No abras eso!', english: "Don't open that!" },
  { sectionId: 6, spanish: '¡No cierres aquí!', english: "Don't close here!" },
  { sectionId: 6, spanish: '¡No uses teléfonos!', english: "Don't use phones!" },
  { sectionId: 6, spanish: '¡No comas aquí!', english: "Don't eat here!" },
  { sectionId: 6, spanish: '¡No bebas eso!', english: "Don't drink that!" },
  { sectionId: 6, spanish: '¡No llegues tarde!', english: "Don't arrive late!" },
  { sectionId: 6, spanish: '¡No camines solo!', english: "Don't walk alone!" },
  { sectionId: 6, spanish: '¡No toques esto!', english: "Don't touch this!" },
  { sectionId: 6, spanish: '¡No hables rápido!', english: "Don't speak fast!" },
  { sectionId: 6, spanish: '¡No muevas nada!', english: "Don't move anything!" },
  { sectionId: 6, spanish: '¡No desperdicies comida!', english: "Don't waste food!" },
  { sectionId: 6, spanish: '¡No rompas eso!', english: "Don't break that!" },
  { sectionId: 6, spanish: '¡No olvides esto!', english: "Don't forget this!" },
  { sectionId: 6, spanish: '¡No tengas miedo!', english: "Don't be afraid!" },
  { sectionId: 6, spanish: '¡No pierdas tiempo!', english: "Don't waste time!" },

  // Section 7 — Negative Imperatives (4 Words) [91–105]
  { sectionId: 7, spanish: '¡No llegues tarde mañana!', english: "Don't arrive late tomorrow!" },
  { sectionId: 7, spanish: '¡No pongas eso aquí!', english: "Don't put that here!" },
  { sectionId: 7, spanish: '¡No uses mi computadora!', english: "Don't use my computer!" },
  { sectionId: 7, spanish: '¡No abras esa puerta!', english: "Don't open that door!" },
  { sectionId: 7, spanish: '¡No cierres las ventanas!', english: "Don't close the windows!" },
  { sectionId: 7, spanish: '¡No toques los platos!', english: "Don't touch the plates!" },
  { sectionId: 7, spanish: '¡No sirvas agua fría!', english: "Don't serve cold water!" },
  { sectionId: 7, spanish: '¡No olvides tu cuaderno!', english: "Don't forget your notebook!" },
  { sectionId: 7, spanish: '¡No dejes nada atrás!', english: "Don't leave anything behind!" },
  { sectionId: 7, spanish: '¡No hables durante clase!', english: "Don't talk during class!" },
  { sectionId: 7, spanish: '¡No escribas con lápiz!', english: "Don't write in pencil!" },
  { sectionId: 7, spanish: '¡No limpies esa mesa!', english: "Don't clean that table!" },
  { sectionId: 7, spanish: '¡No olvides tu llave!', english: "Don't forget your key!" },
  { sectionId: 7, spanish: '¡No mezcles estas tazas!', english: "Don't mix these cups!" },
  { sectionId: 7, spanish: '¡No corras por aquí!', english: "Don't run around here!" },

  // Section 8 — Negative Imperatives (5 Words) [106–120]
  { sectionId: 8, spanish: '¡No dejes la puerta abierta!', english: "Don't leave the door open!" },
  { sectionId: 8, spanish: '¡No dejes tus cosas aquí!', english: "Don't leave your things here!" },
  { sectionId: 8, spanish: '¡No pongas los vasos allí!', english: "Don't put the glasses there!" },
  { sectionId: 8, spanish: '¡No prepares la bebida todavía!', english: "Don't prepare the drink yet!" },
  { sectionId: 8, spanish: '¡No abras la puerta ahora!', english: "Don't open the door now!" },
  { sectionId: 8, spanish: '¡No uses tu teléfono aquí!', english: "Don't use your phone here!" },
  { sectionId: 8, spanish: '¡No olvides tu tarea hoy!', english: "Don't forget your homework today!" },
  { sectionId: 8, spanish: '¡No sirvas el café frío!', english: "Don't serve the coffee cold!" },
  { sectionId: 8, spanish: '¡No cierres la cocina temprano!', english: "Don't close the kitchen early!" },
  { sectionId: 8, spanish: '¡No traigas bebidas a clase!', english: "Don't bring drinks into class!" },
  { sectionId: 8, spanish: '¡No leas la respuesta todavía!', english: "Don't read the answer yet!" },
  { sectionId: 8, spanish: '¡No muevas las sillas grandes!', english: "Don't move the large chairs!" },
  { sectionId: 8, spanish: '¡No olvides tu delantal limpio!', english: "Don't forget your clean apron!" },
  { sectionId: 8, spanish: '¡No pongas mochilas en sillas!', english: "Don't put backpacks on chairs!" },
  { sectionId: 8, spanish: '¡No hables mientras otros leen!', english: "Don't talk while others read!" },

  // Section 9 — Let's Imperatives (4 Words) [121–135]
  { sectionId: 9, spanish: '¡Vamos a preparar café!', english: "Let's prepare some coffee!" },
  { sectionId: 9, spanish: '¡Vamos a limpiar la mesa!', english: "Let's clean the table!" },
  { sectionId: 9, spanish: '¡Vamos a practicar inglés juntos!', english: "Let's practice English together!" },
  { sectionId: 9, spanish: '¡Vamos a leer el menú!', english: "Let's read the menu!" },
  { sectionId: 9, spanish: '¡Vamos a empezar la actividad!', english: "Let's start the activity!" },
  { sectionId: 9, spanish: '¡Vamos a abrir las ventanas!', english: "Let's open the windows!" },
  { sectionId: 9, spanish: '¡Vamos a revisar la tarea!', english: "Let's check the homework!" },
  { sectionId: 9, spanish: '¡Vamos a escribir las respuestas!', english: "Let's write the answers!" },
  { sectionId: 9, spanish: '¡Vamos a repetir esta palabra!', english: "Let's repeat this word!" },
  { sectionId: 9, spanish: '¡Vamos a tomar un descanso!', english: "Let's take a break!" },
  { sectionId: 9, spanish: '¡Vamos a organizar el salón!', english: "Let's organize the classroom!" },
  { sectionId: 9, spanish: '¡Vamos a servir la cena!', english: "Let's serve dinner now!" },
  { sectionId: 9, spanish: '¡Vamos a lavar los platos!', english: "Let's wash the dishes!" },
  { sectionId: 9, spanish: '¡Vamos a revisar el horario!', english: "Let's check the schedule!" },
  { sectionId: 9, spanish: '¡Vamos a terminar la lección!', english: "Let's finish the lesson!" },

  // Section 10 — Let's Imperatives (5 Words) [136–150]
  { sectionId: 10, spanish: '¡Vamos a preparar una bebida fresca!', english: "Let's prepare a fresh drink!" },
  { sectionId: 10, spanish: '¡Vamos a limpiar todas las mesas!', english: "Let's clean all the tables!" },
  { sectionId: 10, spanish: '¡Vamos a organizar los utensilios ahora!', english: "Let's organize the utensils now!" },
  { sectionId: 10, spanish: '¡Vamos a trabajar en grupos hoy!', english: "Let's work in groups today!" },
  { sectionId: 10, spanish: '¡Vamos a practicar oraciones en inglés!', english: "Let's practice sentences in English!" },
  { sectionId: 10, spanish: '¡Vamos a leer el menú completo!', english: "Let's read the full menu!" },
  { sectionId: 10, spanish: '¡Vamos a atender a los huéspedes!', english: "Let's serve all the guests!" },
  { sectionId: 10, spanish: '¡Vamos a poner la mesa juntos!', english: "Let's set the table together!" },
  { sectionId: 10, spanish: '¡Vamos a empezar la clase ahora!', english: "Let's start the class now!" },
  { sectionId: 10, spanish: '¡Vamos a revisar estas nuevas palabras!', english: "Let's review these new words!" },
  { sectionId: 10, spanish: '¡Vamos a escribir en nuestros cuadernos!', english: "Let's write in our notebooks!" },
  { sectionId: 10, spanish: '¡Vamos a hacer un café caliente!', english: "Let's make some hot coffee!" },
  { sectionId: 10, spanish: '¡Vamos a escuchar al instructor!', english: "Let's listen to the instructor!" },
  { sectionId: 10, spanish: '¡Vamos a abrir nuestros libros ahora!', english: "Let's open our books now!" },
  { sectionId: 10, spanish: '¡Vamos a celebrar nuestro progreso hoy!', english: "Let's celebrate our progress today!" },

  // Section 11 — Mixed Imperatives [151–200]
  { sectionId: 11, spanish: '¡Gira a la izquierda!', english: 'Turn left!' },
  { sectionId: 11, spanish: '¡No interrumpas al instructor!', english: "Don't interrupt the instructor!" },
  { sectionId: 11, spanish: '¡Vamos a barrer el piso!', english: "Let's sweep the floor!" },
  { sectionId: 11, spanish: '¡Dobla el papel!', english: 'Fold the paper!' },
  { sectionId: 11, spanish: '¡Vamos a pelar las papas!', english: "Let's peel the potatoes!" },
  { sectionId: 11, spanish: '¡No desperdicies la comida!', english: "Don't waste the food!" },
  { sectionId: 11, spanish: '¡Sigue las instrucciones!', english: 'Follow the instructions!' },
  { sectionId: 11, spanish: '¡No desconectes la impresora!', english: "Don't unplug the printer!" },
  { sectionId: 11, spanish: '¡Mezcla los ingredientes!', english: 'Mix the ingredients!' },
  { sectionId: 11, spanish: '¡Vamos a contar las sillas!', english: "Let's count the chairs!" },
  { sectionId: 11, spanish: '¡No mezcles estos productos!', english: "Don't mix these products!" },
  { sectionId: 11, spanish: '¡Agrega un poco de azúcar!', english: 'Add some sugar!' },
  { sectionId: 11, spanish: '¡Vamos a hervir el agua!', english: "Let's boil the water!" },
  { sectionId: 11, spanish: '¡No dobles el uniforme!', english: "Don't fold the uniform!" },
  { sectionId: 11, spanish: '¡Retira los platos!', english: 'Remove the plates!' },
  { sectionId: 11, spanish: '¡Vamos a enjuagar los vasos!', english: "Let's rinse the glasses!" },
  { sectionId: 11, spanish: '¡No derrames el jugo!', english: "Don't spill the juice!" },
  { sectionId: 11, spanish: '¡Enciende la máquina!', english: 'Turn on the machine!' },
  { sectionId: 11, spanish: '¡Vamos a etiquetar estas cajas!', english: "Let's label these boxes!" },
  { sectionId: 11, spanish: '¡No apagues el horno!', english: "Don't turn off the oven!" },
  { sectionId: 11, spanish: '¡Apaga las luces!', english: 'Turn off the lights!' },
  { sectionId: 11, spanish: '¡Vamos a batir los huevos!', english: "Let's whisk the eggs!" },
  { sectionId: 11, spanish: '¡No pierdas tu recibo!', english: "Don't lose your receipt!" },
  { sectionId: 11, spanish: '¡Pesa los ingredientes!', english: 'Weigh the ingredients!' },
  { sectionId: 11, spanish: '¡No empujes la puerta!', english: "Don't push the door!" },
  { sectionId: 11, spanish: '¡Vamos a trapear el pasillo!', english: "Let's mop the hallway!" },
  { sectionId: 11, spanish: '¡Corta el pan!', english: 'Slice the bread!' },
  { sectionId: 11, spanish: '¡No rayes el escritorio!', english: "Don't scratch the desk!" },
  { sectionId: 11, spanish: '¡Vamos a tostar el pan!', english: "Let's toast the bread!" },
  { sectionId: 11, spanish: '¡Sirve la bebida!', english: 'Serve the drink!' },
  { sectionId: 11, spanish: '¡No bloquees la salida!', english: "Don't block the exit!" },
  { sectionId: 11, spanish: '¡Vamos a secar los cubiertos!', english: "Let's dry the silverware!" },
  { sectionId: 11, spanish: '¡Envuelve el regalo!', english: 'Wrap the gift!' },
  { sectionId: 11, spanish: '¡No arrojes basura aquí!', english: "Don't throw trash here!" },
  { sectionId: 11, spanish: '¡Vamos a guardar los abrigos!', english: "Let's store the coats!" },
  { sectionId: 11, spanish: '¡Llena la botella!', english: 'Fill the bottle!' },
  { sectionId: 11, spanish: '¡No borres ese archivo!', english: "Don't delete that file!" },
  { sectionId: 11, spanish: '¡Vamos a imprimir las copias!', english: "Let's print the copies!" },
  { sectionId: 11, spanish: '¡Vacía el recipiente!', english: 'Empty the container!' },
  { sectionId: 11, spanish: '¡No quemes el pan!', english: "Don't burn the bread!" },
  { sectionId: 11, spanish: '¡Vamos a compartir las notas!', english: "Let's share the notes!" },
  { sectionId: 11, spanish: '¡Sacude la botella!', english: 'Shake the bottle!' },
  { sectionId: 11, spanish: '¡Vamos a comparar las respuestas!', english: "Let's compare the answers!" },
  { sectionId: 11, spanish: '¡No ignores las señales!', english: "Don't ignore the signs!" },
  { sectionId: 11, spanish: '¡Revisa el documento!', english: 'Check the document!' },
  { sectionId: 11, spanish: '¡Vamos a medir la harina!', english: "Let's measure the flour!" },
  { sectionId: 11, spanish: '¡No ensucies tu delantal!', english: "Don't dirty your apron!" },
  { sectionId: 11, spanish: '¡Firma el formulario!', english: 'Sign the form!' },
  { sectionId: 11, spanish: '¡Vamos a ordenar el inventario!', english: "Let's sort the inventory!" },
  { sectionId: 11, spanish: '¡Vamos a actualizar la lista!', english: "Let's update the list!" },
];

export function countEnglishWords(sentence: string): number {
  const tokens = sentence
    .trim()
    .split(/\s+/)
    .filter((token) => token.length > 0);
  return tokens.length;
}

export const SLIDES: Slide[] = RAW_SLIDES.map((entry, index) => {
  const section = SECTIONS.find((s) => s.id === entry.sectionId);
  if (!section) {
    throw new Error(`Unknown sectionId ${entry.sectionId} at slide ${index + 1}`);
  }
  return {
    id: index + 1,
    sectionId: section.id,
    sectionTitle: section.title,
    expectedWordCount: section.expectedWordCount,
    spanish: entry.spanish,
    english: entry.english,
  };
});

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export function validateSlidesDataset(slides: Slide[]): ValidationResult {
  const errors: string[] = [];

  if (slides.length !== 200) {
    errors.push(`Expected 200 slides, found ${slides.length}.`);
  }

  const seenSpanish = new Set<string>();
  const seenEnglish = new Set<string>();
  const sectionCounts = new Map<number, number>();

  for (const slide of slides) {
    sectionCounts.set(slide.sectionId, (sectionCounts.get(slide.sectionId) ?? 0) + 1);

    const actualWords = countEnglishWords(slide.english);
    if (actualWords === 0) {
      errors.push(`Slide ${slide.id} has an empty English translation.`);
    }
    if (slide.expectedWordCount !== null && actualWords !== slide.expectedWordCount) {
      errors.push(
        `Slide ${slide.id} ("${slide.english}") has ${actualWords} words, expected ${slide.expectedWordCount}.`
      );
    }

    const normEs = slide.spanish.trim().toLowerCase();
    if (seenSpanish.has(normEs)) {
      errors.push(`Duplicate Spanish instruction at slide ${slide.id}: "${slide.spanish}"`);
    }
    seenSpanish.add(normEs);

    const normEn = slide.english.trim().toLowerCase();
    if (seenEnglish.has(normEn)) {
      errors.push(`Duplicate English instruction at slide ${slide.id}: "${slide.english}"`);
    }
    seenEnglish.add(normEn);
  }

  for (const section of SECTIONS) {
    const count = sectionCounts.get(section.id) ?? 0;
    const expectedSectionCount = section.endSlide - section.startSlide + 1;
    if (count !== expectedSectionCount) {
      errors.push(
        `Section ${section.id} has ${count} slides, expected ${expectedSectionCount}.`
      );
    }
  }

  const mixedSlides = slides.filter((s) => s.sectionId === 11);
  const hasMixedAffirmative = mixedSlides.some(
    (s) => !s.english.startsWith("Don't ") && !s.english.startsWith("Let's ")
  );
  const hasMixedNegative = mixedSlides.some((s) => s.english.startsWith("Don't "));
  const hasMixedLets = mixedSlides.some((s) => s.english.startsWith("Let's "));
  if (!hasMixedAffirmative || !hasMixedNegative || !hasMixedLets) {
    errors.push(
      "Section 11 must contain affirmative, negative (Don't), and Let's imperatives."
    );
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
