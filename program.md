---
layout: default
title: The program
hero:
  # bgUrl: "/assets/images/fondo.png"
  bgPosition: top
  # css property - center, top, left, right, bottom, percentages, mix of both
  # https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
whoIsItFor:
  odd: true
  # if true the icon is displayed on the left
  # otherwise it is displayed on the right
  icon: back-1
  #action:
   # text: "Apply now"
    #link: "#"
learningGoals:
  # odd: true
  icon: puzzle-pieces
timeline:
  #odd: true
  #icon: whiteboard
  action:
    text: "Apply now"
    link: "#"
  # action button text and the link it will lead to
programStructure:
  odd: true
  icon: gear
  #action:
    #text: "See Meetings Schedule"
    #link: "#"
curriculum:
  icon: pen
  action:
    text: "Curriculum"
    link: "http://curriculum.openhardware.space/"
# all the sections above use the same keys (odd, icon, action)
# a list of available icons can be seen at \assets\fonts\flaticon.png

tabs:
  # roles at OHM and their descriptions
  action:
    text: "See Schedule"
    link: "#"
  # action button text and the link it will lead to
  items:
    - title: Mentees
      bg: "/assets/images/mentee.jpeg"
      ## url to photo representing the role
      role: |
        A Mentee is a person or a team running/starting an open hardware project. Mentees design and develop open hardware projects that empower others to collaborate within inclusive communities.
        They are passionate, ready to learn and apply open hardware practices to their project or community, supporting the global open hardware movement.
      criteria: >
        Project in the initial stages (either a link to publicly available documentation or an “one pager” with the project plan including materials and their availability).

        Willingness to publish all project details online

      commitment: >
        - 5h/week for 15 weeks 

        - Full-day availability for the Global sprint (week 13)

      # these sections are predefined,
      # they must carry their respective names (role, criteria, commitment) to be applied

    - title: Mentors
      bg: "/assets/images/mentor.jpeg"
      role: >
        Mentors support participants as they practice working open and facilitate connections within their networks

        Mentors will provide support and guidance to their assigned mentees as they go through training and learn to work openly on their projects.

        Mentors will gain valuable coaching skills and connections across the open hardware community.

      criteria: >
        Has completed Open Hardware Makers training for mentors.

        Has demonstrated an understanding and ability to work openly
      commitment: >
        max. 1.5 hrs weekly for 15 weeks

        One-time mentors training, 1.5h

    - title: Experts
      bg: "/assets/images/expert.jpeg"
      role: >
        Experts support participants with domain-specific knowledge as they practice working open and facilitating connections within the network.
      criteria: >
        Demonstrated expertise in their field
        Open to facilitate connections in their network
      commitment: >
        One-time round of experts assessment of projects, 2h
        45 min online meeting with interested participants on request
---

<!-- PAGE CONTENT -->

{% capture whoIsItFor %}

## Who is Open Hardware Makers <br> for?

**Any person or team starting a hardware project in any part of the world can apply to Open Hardware Makers, regardless of age, gender, ethnicity or professional background.** 

Open Hardware Makers supports the development of early stage open hardware projects around the world. You may want to build your project for different purposes (science, education, business, community) and use a variety of materials (analog, digital, mechanical, textiles, bio). In any case, the program will support you in making it open for anyone to reuse.

{% endcapture %}

<!-- -->

{% capture learningGoals %}

## Learning Goals

Open hardware projects are as diverse as their creators. We propose a series of fundamental principles and concrete practices that are applicable to any open hardware project.

You will learn and apply these best practices in order to design and build an open hardware project in a collaborative way.

**Participants who complete OHM will be able to:**

- Understand what openness means for hardware projects
- Understand the role of their project in the open hardware community
- Build a fully-reusable project and make it easier for others to find it
- Understand & promote cooperation, diversity and inclusion in open hardware

{% endcapture %}

<!-- -->

{% capture programStructure %}

## Program Structure

15-weeks applying our **curriculum** to your own project, and preparing a demo to showcase at a **public call**. We support you with the following activities, all remote:

##### 1:1 mentorship meetings

You will meet with  your mentor every second week to review the week’s content and assignments, and for general follow-up on your project.

##### Cohort meetings

You will meet your fellow mentees every other week to peer-review your progress and share lessons, questions and concerns.

##### Round of experts

You will have access to a pool of experts who can provide support in different specific domains (technical, community building, business experts, etc.)
{% endcapture %}


{% capture curriculum %}

<!-- -->

## Curriculum

Our curriculum takes you through the fundamentals of open hardware, with concrete practices for building your project along the way.

During 2020, a grant from Mozilla Foundation allowed us to enrich the content via a community consultation and a review by an expert panel. 

You can access the curriculum below, it is currently hosted in a GitHub repository and released under a CC-BY 4.0 license.

{% endcapture %}

<!-- -->

<!-- END PAGE CONTENT -->

<!-- PAGE LAYOUT -->

{% include hero.html params=page.hero %}

<div class="container pt-100">
{% include cta-section.html params=page.whoIsItFor content=whoIsItFor %}
{% include cta-section.html params=page.learningGoals content=learningGoals %}
</div>
<div class="container pt-5">
<img width="80%" src="/assets/images/path.png">
</div>
<div class="container pt-100">
{% include cta-section.html params=page.programStructure content=programStructure %}
{% include cta-section.html params=page.curriculum content=curriculum %}
</div>
{% include tabs.html items=tabContent titles="Mentees,Mentors,Experts" params=page.tabs %}


<!-- END PAGE LAYOUT -->
