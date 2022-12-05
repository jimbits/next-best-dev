const words =
  "I'm baby normcore slow-carb schlitz Vegan ethical pop-up chicharrones microdosing fit same gentrify blog godard Kitsch DSA subway tile prism Pinterest kogi before they sold out franzen gochujang fashion axe DIY kickstarter ascot vice Scenester mukbang wolf Praxis hammock leggings XOXO locavore palo santo live Live-edge bitters Taxidermy vice iceland chia gluten-free swag irony cold-pressed ascot lumbersexual Schlitz squid disrupt raclette hexagon deep Organic meggings sus lo-fi adaptogen prism hammock sartorial Everyday carry sartorial brunch cliche YOLO umami etsy hoodie ennui narwhal venmo cornhole Ugh kitsch art party asymmetrical pitchfork shabby chic VHS microdosing sartorial umami seitan raclette chia photo booth tousled listicle narwhal poutine banjo tattooed Coloring book keytar trust fund lomo championship passion warning meal chapter injury extent college variation strategy establishment advice reception possibility mall video poetry hat Transponder log partitioned software capacitance with with with reducer cascading transistorized generator reflective high Device interface log remote processor harmonic proxy cable metafile in Inversion reflective development in capacitance with network development sequential plasma video silicon Logistically transmission technician scalar for system software integral scalar read-only sampling Logarithmic capacitance disk processor logistically bypass procedural debugged services backbone femtosecond or Services data scalar scalar encapsulated system transistorized interface floating-point sequential Encapsulated video distributed internet frequency converter sampling processor software Mainframe broadband floating-point servicing port audio proxy system Infrared normalizing record services bypass computer Element partitioned digital proxy record network boolean software transistorized supporting recognition controller Dithering scalar integral led partitioned application bridgeware recognition phaselock Arrray anomoly generator distributed bridgeware led computer extended transistorized cache procedural gigabyte frequency integer sampling Pulse mainframe developer dithering led log harmonic transponder bridgeware prompt Distributed boolean adaptive distributed inversion integer integral kilohertz Infrared bypass video deviation analog prototype Debugged mainframe with deviation echo computer potentiometer record video coordinated Infrared developer metafile floating-point bus logistically backbone resistor infrared remote Distributed boolean n-tier element connectivity gigabyte cable harmonic debugged converter phaselock record For processor sequential feedback record broadband disk sampling analog led bridgeware logistically recursive Reducer distributed network backbone controller resistor connectivity bus port digital network transistorized audio debugged Resistor overflow partitioned anomoly procedural technician integer Encapsulated anomoly gigabyte services deviation capacitance scan harmonic computer mainframe partitioned Connectivity metafile bypass processor procedural analog boolean prompt cache sequential frequency with infrared log Integer infrared interface femtosecond harmonic developer distributed internet debugged digital read-only with video controller controller Harmonic pc sequential internet processor coordinated data kilohertz sampling prompt cascading pulse frequency Pc with pc element frequency sampling element bypass digital silicon analog Disk phase technician bus proxy metafile sequential phaselock pc led transistorized feedback converter inversion Arrray procedural generator remote prompt broadband proxy services port proxy Partitioned bypass phaselock encapsulated procedural sampling cable silicon deviation kilohertz technician internet data".split(
    " "
  );

const joiner = "and with for is was the using of".split(" ");
const numberOfWordsInTitle = randomNumber(3, 5);

let title = ``;

function randomNumber(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function toUpper(makeUpperCase) {
  const word = makeUpperCase;
  const firstLetter = word.substring(0, 1).toUpperCase();
  const rest = word.substring(1, word.length);
  return firstLetter + rest;
}

export function useRandomTitle(){
    let title = ''
   
    for (let i = 0; i < numberOfWordsInTitle; i++) {
       
      if (i === 1) {
        //   title += " " + toUpper(joiner[Math.floor(Math.random() * joiner.length)]);
          title += " With"  ;
        }
           
        if (i === 3) {
            // title += " " + toUpper(joiner[Math.floor(Math.random() * joiner.length)]);
            title += " For The"  ;
        }
        title += " " + toUpper(words[Math.floor(Math.random() * words.length)]);
      }
      
      return title
}
