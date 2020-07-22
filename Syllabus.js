class Syllabus{
    constructor(subjectDropbox){
    this.greeting = createElement('h4');
    this.greeting2 = createElement('h4');

    this.subjectDropbox = createSelect();
    this.subjectDropbox.option("Maths");
    this.subjectDropbox.option("Science")
    this.subjectDropbox.option("SST")
    this.subjectDropbox.option("ICT")
    this.subjectDropbox.option("English")
    this.subjectDropbox.option("II Language")

    this.termDropbox = createSelect();
    this.termDropbox.option("Term 1")
    this.termDropbox.option("Half-Yearly")
    this.termDropbox.option("Term 2")
    this.termDropbox.option("Final")

    this.englishSyllabus = createInput("English Syllabus");
    this.sstSyllabus = createInput("SST Syllabus");
    }
    
    display(){
        this.greeting.html("Please choose the subject:");
        this.greeting2.html("Please choose the term:");

        this.greeting.position(10, 50);
        this.greeting2.position(10, 60);

        this.subjectDropbox.position(displayWidth - 50, displayHeight - 20);
        this.termDropbox.position(190, 80);

        this.englishSyllabus.position()
        this.sstSyllabus.position()
    }


    update(){
        var trialIndex = "Syllabus/Trial"
        database.ref(trialIndex).set({
          engSyllabus :this.engSyllabus,
        });
        console.log(engSyllabus);
    }

    readtrial(){
        var trialRef = database.ref('Trial');
        trialRef.on("value",(data)=>{
            Trial = data.val();
        })
        console.log(Trial);
    }

    getSubject(){
        var subjectRef = database.ref('Syllabus/Subjects/English/engSyllabus');
        subjectRef.on("value",(data)=>{
            engSyllabus = data.val();
        })
        console.log(engSyllabus);
    }


    
    
}
