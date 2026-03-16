---
###################### hero slider ###########################
slider:
  enable: true
  slider_item:
  # slider item loop
  - bg_image: images/banner/banner-1.jpg
    animation_from: left
    subtitle: We are here to
    title: Help Your Business Grow
    content: SKEJJO Consulting provides expert business consulting services to help your <br> organization achieve its goals and maximize its potential.
    pagination_icon: ti-comments # themify icon pack : https://themify.me/themify-icons
    pagination_name: Consultation
    button:
      enable: true
      label: More details
      link: "about/"

  # slider item loop
  - bg_image: images/banner/banner-2.jpg
    animation_from: up
    subtitle: Get your
    title: Business Strategy
    content: Our team of experienced consultants will work with you to develop <br> a winning strategy for your business.
    pagination_icon: ti-bar-chart # themify icon pack : https://themify.me/themify-icons
    pagination_name: Strategy
    button:
      enable: true
      label: More details
      link: "about/"

  # slider item loop
  - bg_image: images/banner/banner-3.jpg
    animation_from: down
    subtitle: Start your
    title: Digital Transformation
    content: We help businesses leverage technology to drive growth, <br> improve efficiency and create new opportunities.
    pagination_icon: ti-money # themify icon pack : https://themify.me/themify-icons
    pagination_name: Digital
    button:
      enable: true
      label: More details
      link: "about/"

########################################## About #########################################
about:
  enable: true
  bg_image: "images/background/about-bg.jpg"
  title: "Who We Are?"
  content: "SKEJJO Consulting is a professional consulting firm dedicated to helping businesses achieve their full potential through strategic planning, operational improvement, and digital transformation."
  # bullet point
  bullet_point:
  - "Strategic Consulting"
  - "Business Analysis"
  - "Digital Transformation"
  - "Project Management"
  - "Process Optimization"
  - "Technology Solutions"
  button:
    enable: true
    label: "Explore More"
    link: "about/"

##################################### Skill ##############################################
skill:
  enable: true
  subtitle: Our Skills
  title: Why Choose Us
  content: "We bring deep expertise and a proven track record to every engagement. Our consultants combine industry knowledge with analytical rigor to deliver results that matter. <br><br> From strategy through execution, we partner with our clients to drive meaningful and sustainable change."
  # funfacts
  funfacts:
  - icon: ti-server # themify icon pack : https://themify.me/themify-icons
    title: Projects Done
    count: 50

  - icon: ti-face-smile # themify icon pack : https://themify.me/themify-icons
    title: Satisfied Clients
    count: 40

  - icon: ti-thumb-up # themify icon pack : https://themify.me/themify-icons
    title: Years Experience
    count: 10

  # progressbar
  progressbar:
  - title: Business Strategy
    progress: 95%

  - title: Digital Transformation
    progress: 90%

  - title: Process Optimization
    progress: 85%

  - title: Project Management
    progress: 90%

########################################### Mission ###################################
mission:
  enable: true
  subtitle: Our Goal
  title: Company Mission
  content: "We are committed to delivering exceptional value to our clients by combining deep expertise with innovative thinking and a collaborative approach."
  image: images/chart.png
  accordion:
  - title: Our Company Mission
    description: To empower businesses with the insights, strategies, and capabilities they need to thrive in an ever-changing world.

  - title: Our Company Vision
    description: To be the trusted consulting partner that helps organizations achieve sustainable growth and competitive advantage.

  - title: Our Company Values
    description: Integrity, excellence, collaboration, and innovation guide everything we do. We hold ourselves to the highest standards in every client engagement.

##################################### call to action #################################
call_to_action:
  enable: true
  bg_image: "images/background/cta.jpg"
  title: "Ready to transform your business?"
  button:
    enable: true
    label: "get a quote"
    link: "contact/"

########################################## blog ####################################
blog:
  enable: true
  title: "Latest Insights"
  subtitle: "News & Articles"
  section: "blog"
  # blog item comes from "content/blog" folder

---
