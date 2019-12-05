import { Component, OnInit } from '@angular/core';
import { languageModel } from 'src/app/core/models/language.model';

@Component({
  selector: 'app-resp-flex',
  templateUrl: './resp-flex.component.html',
  styleUrls: ['./resp-flex.component.scss']
})
export class RespFlexComponent implements OnInit {

  languages:languageModel[] = [
    {
      name: "javascript",
      info: "Primarily, JavaScript is light weighed, interpreted and plays a major role in front-end development. Even some of the major social media platforms believe that JavaScript provides an easy way to create interactive web pages smoothly and is career-driven."
    },
    {
      name: "typescript",
      info: "TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript"
    },
    {
      name: "Python",
      info: "Python is one of the general purpose, user-friendly programming language here on my list. What makes it so? Like Java, Python syntax is clear, intuitive and almost similar to the English language. Python’s “object-based” subset is somewhere similar to JavaScript."
    },
    {
      name: "Java",
      info: "Java is highly cross-platform compatible or platform independent. Since you can code anywhere (I mean on all devices), compile into low-level machine code, and finally, execute on any platform using JVM – Java Virtual Machine (which is platform dependent)."
    },
    {
      name: "PHP",
      info: "PHP stands for Hypertext Preprocessor, is a general-purpose programming language. Clearly, PHP is a scripting language, which runs on a server, and it is used to create web pages written in HTML. It is popular because it is free, cheap, easy to set up and simple to use for new programmers."
    },
    {
      name: "Swift  ",
      info: "Swift is deeply influenced by Python and Ruby and was designed to be beginner-friendly and fun to use. Swift is considered to be a faster, more secure, and easier to read and debug than its predecessor Objective-C."
    },
    {
      name: "C#",
      info: "C-sharp is a powerful, object-oriented programming language developed by Microsoft in 2000. C-sharp is utilized in developing desktop applications and more recently, Windows 8/10 applications and requires a .NET framework to function."
    },
    {
      name: "Ruby",
      info: "Ruby becomes popular by Ruby on Rails framework, a full-stack web framework. Ruby has dynamically typed language, it does not have hard rules and it is a high-level language which resembles with the English language to a great extent."
    },
    {
      name: "Objective-C",
      info: "Objective-C (ObjC) is an object-oriented programming language. It is used by Apple for the OS X and iOS operating systems and their application programming interfaces (APIs). It was developed in the 1980s and came in usage by some of the earliest operating systems."
    },
    {
      name: " SQL",
      info: "SQL (es-que-el) stands for Structured Query Language, is a programming language to operate databases. It includes storing, manipulating and retrieving data stored in a relational database."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
