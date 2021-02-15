# Content management instructions

The website uses markdown to write content and Yaml for front-matter.
Front matter refers to values you can set to have them displayed on the respective page.

- Markdown guide: https://www.markdownguide.org/basic-syntax/
- YAML format docs: https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html
- Find font awesome 4.7.0 icons (faIcon value) here: https://fontawesome.com/v4.7.0/
- Find theme icons in \assets\fonts\flaticon.png

### Data content

#### Naviagtion

The list of navbar items can be changed in the \_data/navigation.yml
The Url is where the link will lead to and text is displayed on the navbar.
To lead to a different webpage just write its absolute url.

#### Roles on homepage and community page

Editable from YAML file in \_data/roles.yml
Set font awesome icons by their name without prefix, find icons here https://fontawesome.com/v4.7.0/

- Home uses <code>shortDescription</code> value
- Community uses <code>description</code> value

#### Other data content

Besides navigation and roles yaml files, there are also footer.yml, partners.yml (or sponsors), and supportSection.yml files. You can edit the footer, change the list of partners/sponsors and set the title, text, and button link in the support ohm section respectively.

### Pages

Front matter comments are written in the markdown files to explain the values in detail.

#### Program page special markdown content

The program page has several sections of the same layout, but you are able to edit them all from a single file.
Variables were introduced in the program.md file to fully leverage the abilities of markdown.
Each section has a name in the front matter like so:

```yaml
whoIsItFor:
  odd: true
  icon: target
  action:
    text: "Apply now"
    link: "#"
```

Find the corresponding markdown variable with the same name below the front matter
Write any markdown between the <code>{% capture %}</code> and <code>{% endcapture %}</code> codeblocks.
The markdown looks as follows:

```
{% capture whoIsItFor %}

## Who is it for?

Ultor traxit tecumque stagnum, et lumina senili indelebile cincta Achivam lux
pectora: [ipse Nepheleidos](http://www.omnia.org/nam.html). Sed nunc sine vagas,
aureus dixit arma quas mea peragit negarunt Callida mersis latis. Est spectes
posita [omnes](http://boote.org/fuit), levia noctes obstrepuere ignibus
[palmis](http://mollierat.com/meis), omnibus comas. Nec visa placet stipite
primum, corpore non unde, vel. Scilicet in eandem.

{% endcapture %}
```

Both are then used in the include:

```
{% include cta-section.html params=page.whoIsItFor content=whoIsItFor %}
```

Notice the params=page.whoIsItFor (front matter variable) and the content=whoIsItFor (captured markdown content)
You can add more sections at will by repeating the above. Examples of that are shown in program.md:

```
<!-- PAGE LAYOUT -->

{% include hero.html params=page.hero %}

<div class="container pt-100">
{% include cta-section.html params=page.whoIsItFor content=whoIsItFor %}
{% include cta-section.html params=page.timeline content=timeline %}
{% include cta-section.html params=page.learningGoals content=learningGoals %}
</div>
{% include tabs.html items=tabContent titles="Mentees,Mentors,Experts" params=page.tabs %}
<div class="container pt-100">
{% include cta-section.html params=page.meetingStructure content=meetingStructure %}
{% include cta-section.html params=page.curriculum content=curriculum %}
</div>

<!-- END PAGE LAYOUT -->
```

#### Paginated content

You can set the number of items displayed by changing/adding the "per_page" value in the front matter of the following files:
stories.md, projects.md, mentors.md, experts.md
You can also change the hero background image via the "bg" value. Simply pass in some image url.
For filtered pages do the same in \_layouts/ folder for stories.html projects.html mentors.html and experts.html.
To add items look in the collections folder. Mentors, Experts, Projects, Stories all feature filtering by tags.
By adding a tags key with a list of values in any file that belongs to these collections you can apply filtering to it.

#### Config

You may change the following variables. Do not change anything else unless you know what you are doing.

```
title: Open Hardware Makers
email: your-email@example.com
description: >- # this means to ignore newlines until "baseurl:"
  Mentoring & Training Program on Open Hardware inspired by @MozOpenLeaders.
  Making \#openhardware the default everywhere, one project at a time.
baseurl: ""
url: "https://eager-wescoff-9dee79.netlify.app/"
logo: "/assets/images/ohm-logo.svg"
twitter_username: jekyllrb
github_username: jekyll
disquss_shortname: openhardware-space
api_url: https://ohm-contact-service.herokuapp.com/api/sendemail
loader: false
```

#### Setup disquss comments

Create a disquss account, register an app there, whitelist your domain in the Advanced options or set it as website url.
Set the url variable in \_config.yml accordingly. Disquss may not work without it.
Disquss is added to story pages. If you want comments to appear below a **story** simply add the <code>comments: true</code> line in the front matter of that page.

### What you should NOT do

If you are not a developer do not change folder structure, parts of the \_config.yml file that were not specified here, or the layout value in any md file.

### What you should do

Create a backup/copy of the current template so you have it if something goes wrong.
