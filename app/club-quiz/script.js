var form = [{
  question: "If you were describing your typical weekend, what would it be?",
  options: [{
    text: "Reading or doing something artsy",
    values: { literatureArtCooking: 1 }
  }, {
    text: "Playing Games with friends",
    values: { athleticGaming: 1 }
  }, {
    text: "Studying",
    values: { academics: 1 }
  }, {
    text: "Catching up on the news",
    values: { political: 1, perspective: 1 }
  }, {
    text: "Participating in a competition",
    values: { academics: 1, competitive: 1 }
  }, {
    text: "Watching a play / musical",
    values: { visualArts: 1 }
  }, {
    text: "Volunteering",
    values: { academics: 1, humanitarian: 1 }
  }, {
    text: "Participating in a religious activity",
    values: { religious: 1 }
  }, {
    text: "Learning about different cultures",
    values: { humanitarian: 1, perspective: 1 }
  }]
}, {
  question: "What project would you be more interested in?",
  options: [{
    text: "Community Service",
    values: { academics: 1, humanitarian: 1 }
  }, {
    text: "Playing games",
    values: { athleticGaming: 1, competitive: 1 }
  }, {
    text: "Discussing your religion",
    values: { religious: 1 }
  }, {
    text: "Giving a speech or participating in a debate",
    values: { academics: 1, competitive: 1 }
  }, {
    text: "Arts and/or reading",
    values: { literatureArtCooking: 1 }
  }, {
    text: "Learning about new and different perspectives",
    values: { political: 1, perspective: 1 }
  }, {
    text: "Being a part of a play/musical/movie",
    values: { visualArts: 1 }
  }, {
    text: "Competing in sport/gaming competitions",
    values: { athleticGaming: 2, competitive: 1 }
  }, {
    text: "Political",
    values: { political: 1 }
  }]
 }, {
  question: "How much time are you willing to invest in your clubs?",
  options: [{
    text: "Not too much, as little as possible",
    values: { perspective: 1, literatureArtCooking: 1 }
  }, {
    text: "A moderate amount, I do not want mandatory attendance",
    values: { academics: 1, religious: 1, perspective: 1, political: 1, literatureArtCooking: 1  }
  }, {
    text: "As much as needed",
    values: { academics: 1, humanitarian: 1, competitive: 1 }
  }]
 }, {
  question: "Why do you want to join clubs?",
  options: [{
    text: "To make my college applications look good",
    values: { academics: 1 }
  }, {
    text: "I don't",
    values: { humanitarian: 0 }
  }, {
    text: "I want to give back to the community",
    values: { humanitarian: 1 }
  }, {
    text: "For a fun time",
    values: { athleticGaming: 1 }
  }, {
    text: "To meet people with the same religious beliefs as me",
    values: { religious: 1 }
  }, {
    text: "To participate in political discussions",
    values: { political: 1 }
  }, {
    text: "To improve my skill set and participate in competitions",
    values: { competitive: 1 }
  }, {
    text: "To discuss books and make art",
    values: { literatureArtCooking: 1 }
  },{
    text: "To expand my thinking and learn about different cultures",
    values: { perspective: 1 }
  }]
}];


var categories = [ "academics", "athleticGaming", "religious", "visualArts", "humanitarian", "perspective", "literatureArtCooking", "political", "competitive" ];


var resultsTitles = {
  academics: {
    name: "Academics",
    description: "bla",
    data: `<div><strong>ASL Club</strong> Sponsor: Karen Colvin We do activities to promote deaf awareness, practice our signing, fundraise for the Indiana School for the Deaf, and develop relationships with the deaf in our community</div><div> </div><div><strong>Academic Team</strong> Sponsors: Sandy Riley, John Drodz This team has many different possibilities for students to show their knowledge in a team competition format, and consists of Quiz Bowl, Spell Bowl, and Super Bowl. Further, Super Bowl consists of teams of major disciplines (English, Math, Science, Social Studies, and Fine Arts).</div><div> </div><div><strong>Book Club</strong> Sponsor: Karin Foster Join others to talk about books, share and swap books, watch a movie based on a book and more! Stop by and check it out!</div><div> </div><div><strong>Chess Club</strong> Sponsors: Curry Harden, Peter Salvadori To learn about chess; to improve our skill level and to compete competitively.</div><div> </div><div><strong>Code For Change</strong> Sponsor: Julie Alano Select a charity/non-profit organization and use students skills in computer science to help aide the charity.</div><div> </div><div><strong>Creative Writing</strong> Sponsor: Haylea Quaranta All students with a common interest of all genres of writing fiction, poetry, narrative, biography, theater, screenplays, etc., and who want to share their creative talents and ideas with others.</div><div> </div><div><strong>DECA</strong> Sponsors: Kristin Lidstrom, Adam Broughton, Shawn Crull, Kari Richardson Competitive club for high school business students. DECA prepares emerging leaders and entrepreneurs, in marketing, finance hospitality and management, to be career and college ready.</div><div> </div><div><strong>Destination Imagination</strong> Sponsor: Kristy Seitz We are a creative problem solving academic team that competes in the regional, state and global communities. It involves problem solving, creativity and teamwork to solve 6 internationally published challenges. Students from their own teams up to 7 members and compete in both a central challenge and an instant challenge.</div><div> </div><div><strong>FFA </strong>Sponsors: Tom Younts, Caroline Kuhn FFA provides opportunities for students in leadership, personal growth, and career success. Focusing on leadership, students can compete in various contests, volunteer their time and efforts to benefit the community, and hold numerous leadership roles within the chapter and throughout the state.</div><div> </div><div><strong>Girls Who Code</strong> Sponsor: Julie Alano Club that encourages female participation in the ever growing field of technology</div><div> </div><div><strong>Math Team</strong> Sponsors: Mary Carson, Christine Hamilton, Naomi Jackson This team is composed of students who are interested in socializing with others while problem- solving. This club sponsors mathematics competitions including Mathfax, Indiana Math League, Rose Hulman Math day, the American Mathematics Competition, and the Indiana State Math competition. Students must be active members of Math Club in order to be eligible for Mu Alpha Theta National Mathematics Honorary. This club is open to any student.</div><div> </div><div><strong>Military History Club</strong> Sponsor: Jason Marer This club meets to analyze and discuss military history in the United States and around the world. Students put together presentations and engage in respectful debates. The club also has an annual field trip in May.</div><div> </div><div><strong>Mock Trial Team</strong> Sponsor: Janet Chandler Team members must audition to participate in this competitive team. Mock trial participates in county, regional, state, and national competitions. Mock Trial team members encompass all four grades. They are students who enjoy acting, public speaking, and law.</div><div> </div><div><strong>Rube Goldberg Club</strong> Sponsor: Robin Townsend Create Rube Goldberg machine with multiple steps and tricks to achieve a final simple task.</div><div> </div><div><strong>National Honor Society</strong> Sponsors: Amy Shipley & Jill McGrath This is an organization that rewards students for their academic achievements and service to the community and school. In order to be a member, a student must complete an application in March of his/her sophomore or junior year. A student must have earned a cumulative grade point average of 3.5 or higher and participated in clubs, organizations or athletics. The student’s application will be reviewed by a faculty committee and acceptance will be based on the factors of scholarship, leadership, character and service. Inductions will take place in the fall of every school year. For more information, please contact Mrs. Shipley at (317) 594‐4190.</div><div> </div><div><strong>Philosophy Club</strong> Sponsor: Brian Pletcher Students will study the great philosophers, world views and religions of the world based on their own belief system. The format will encourage open discussion, Socratic dialogs, questioning, and healthy debate in order to help students understand other views and to defend and stretch their own views. For more information, please contact Mr. Pletcher at (317) 594‐4190.</div><div> </div><div><strong>Royal Eco Club</strong> Sponsor: Kacy Brobst, Wafa Safi-Hassan is an organization that promotes environmentally‐friendly lifestyle and seeks to educate those at HSE about current environment issues.</div><div> </div><div><strong>Royal Med</strong> Sponsors: Erin Gastineau & Ashley Heckley Royal Med is a club that strives to allow students who are inspired by medicine and the medical field to collaborate with peers who are the same dreams.</div><div> </div><div><strong>Robotics Club</strong> Sponsor: Josh Gish To promote the application of STEM through the use of robotics. Come design, build, program and test robots using the VEX Platform. We participate in custom in‐house competitions each nine weeks and in out of house competitions as well. No experience necessary.</div><div> </div><div><strong>Rube Goldberg Club</strong> Sponsor: Robin Townsend Create Rube Goldberg machine with multiple steps and tricks to achieve a final simple task.</div><div> </div><div><strong>Speech and Debate Team</strong> Sponsors: Bob Hinshaw Our speech and debate team is committed to two things: helping students enjoy and succeed in the art of public speaking and persuasion, as these skills are essential in life, and to having fun while doing so! We are a competitive in the Hoosier Crossroads Conference and can help any student who wishes to learn and develop skills to be successful in a variety of dramatic events, like poetry reading or original oratory, limited preparation speaking events, like expository and/or informative speaking, and various styles of debate, like public forum or Lincoln-Douglas debate.</div><div> </div><div><strong>Student Council</strong> Sponsors: Emily Curnow, Caroline Emerson Student Council is an opportunity for students to be the voice of HSE, along with planning homecoming activities, volunteering, and running the annual food drive.</div><div> </div><div><strong>We The People</strong> Sponsor: Janet Chandler We the People is included in an AP Government class. Team members form smaller groups to study the Constitution. Units deal with the philosophy and history behind the Constitution in addition to applications to the present day. The team competes at regional and state level. The state winner advances to a national competition.</div><div> </div><div><strong>Quill and Scroll</strong> Sponsors: David Young & Jordan Klobusnik Quill and Scroll International Society for high school journalists (journalism honor society)</div><div> </div>`
  },
  athleticGaming: {
    name: "Athletics & Gaming",
    description: "bla",
    data: `<div><strong>Bowling</strong> Sponsor: Andrea McAlister We meet at Pinheads two times per week for practice and competitions.</div><div>Fellowship of Christian Athletes Sponsor: Steve Guenin An interdenominational Christian organization, open to all students, not just athletes, who want to join together in fellowship. The group meets every week for games, snacks, singing, and Bible study. For more information, please contact Mr. Guenin and Mrs. Wiseman at (317) 594‐4190.</div><div> </div><div><strong>Hiking Club</strong> Sponsor: TBA Meetings will take place to plan and coordinate day-long hikes to area parks and reserves. Hikes will take place one day a month. The club will encourage healthy and sustainable living practices.</div><div> </div><div><strong>Paintball Club</strong> Sponsor: Greg Sasser Group of students that share an enthusiasm for the sport of paintball.</div><div> </div><div><strong>Rock Climbing</strong> Sponsor: Patty Kulesavage Rock Climbing Club: Ever wanted to climb high, safely? Join the rock climbing club, where you'll learn basics about rock climbing, and learn to love the sport. We will be climbing off site, location to be determined, but will most-likely be Climb Time!</div><div> </div><div><strong>Running Royals</strong> Sponsors: Mary Carson, Paula Manchess Running Royals is a group of runners, run/walkers, even walkers who want to learn to run. It is an opportunity to participate in a social run each week at whatever level you are. In the fall we will meet on Thursday’s after school until 4:00 p.m.; i+-+n the spring we will train for the Geist 5K, 10K, or mini and meet Tuesday and Thursday’s after school until 4 p.m. Club dues are $10 for the year.</div><div> </div><div><strong>Ski/Snowboarding Club</strong> Sponsors: Kim Beaulieu, Jerry Davis, Tish McCallister This club travels to Perfect North ski resort 4 times during January every year for a very reasonable price. Ski/Snowboarding is open to new and experienced skiers.</div><div> </div><div><strong>Board Game Club</strong> Sponsors: Adam Mitschelen, Megan Ewing Bring students together to play board and card games with like-minded gamers.</div><div> </div><div><strong>Chess Club</strong> Sponsors: Curry Harden, Peter Salvadori To learn about chess; to improve our skill level and to compete competitively.</div><div> </div><div><strong>Robotics Club</strong> Sponsor: Josh Gish To promote the application of STEM through the use of robotics. Come design, build, program and test robots using the VEX Platform. We participate in custom in‐house competitions each nine weeks and in out of house competitions as well. No experience necessary.</div><div> </div><div><strong>Rube Goldberg Club</strong> Sponsor: Robin Townsend Create Rube Goldberg machine with multiple steps and tricks to achieve a final simple task.</div><div> </div>`
  },
  religious: {
    name: "Religious",
    description: "bla",
    data: `<div><strong>Fellowship of Christian Athletes</strong> Sponsor: Steve Guenin An interdenominational Christian organization, open to all students, not just athletes, who want to join together in fellowship. The group meets every week for games, snacks, singing, and Bible study. For more information, please contact Mr. Guenin and Mrs. Wiseman at (317) 594‐4190.</div><div> </div><div><strong>P7 (Project 7)</strong> Sponsor: Priscilla Gunn Learning and discussions on the Bible.</div><div> </div><div><strong>Young Life Capernaum</strong> Sponsor: Sandra Riley Capernaum is the arm of Young Life’s ministry that is specifically dedicated to serving students and young adults with special needs and physical & intellectual disabilities. Young Life is a global, non-denominational Christian outreach ministry whose mission is to introduce adolescents to Jesus Christ and help them grow in their faith. Capernaum events occur once a month after school and we are run by Young Life adult volunteers and upperclassmen students who are actively involved in Young Life. Students of all faith backgrounds – as well as their parents/guardians – are welcome.</div><div> </div><div><strong>Muslim Student Association</strong> Sponsor: Wafa Safi-Hassan This club is devoted to creating a sense of community for Muslim students (and friends) through service and activism, educating both Muslims and people of other faiths about the religion of Islam, and facilitating a better environment for students on campus. For more information, please contact Wafa Safi‐Hassan at wsafi@hse.k12.in.us.</div><div></div>`
  },
  visualArts: {
    name: "Visual Arts",
    description: "bla",
    data: `<div><strong>Drama Club</strong> Sponsor: Mary Armstrong Drama Club sponsors the fall play and spring musical. Its purpose is to expose students to theatre and its working. It also strives to help students develop a sense of responsibility, self-worth, and confidence by teaching students acting, technical, and life skills.</div><div> </div><div><strong>International Thespian Club</strong> Sponsor: Mary Armstrong Honorary for students involved in theater. HSE is a member of the International Thespian Society. We received our charter</div><div> </div><div><strong>Olio Road Productions</strong> Sponsor: Jamie Follis Connect students with a passion in film and give them the training, partnerships, and outlet to create.</div><div></div>`
  },
  humanitarian: {
    name: "Humanitarian",
    description: "bla",
    data: `<div><strong>Best Buddies High School</strong> Sponsor: Morgan Rumple, Barb Onufrock Best Buddies is a nonprofit 501(c)(3) organization dedicated to establishing a global volunteer movement that creates opportunities for one-to-one friendships, integrated employment and leadership development for people with intellectual and developmental disabilities.</div><div> </div><div><strong>Bring Change To Mind</strong> Sponsors: Leslie Caliz, Brooke Lawson Create awareness, educate, and have a voice in regards to mental health and suicide prevention.</div><div> </div><div><strong>Code For Change</strong> Sponsor: Julie Alano Select a charity/non-profit organization and use students skills in computer science to help aide the charity.</div><div> </div><div><strong>Crafting For Kids</strong> Sponsor: Kim Bakle Create DIY crafts for children at Riley!</div><div> </div><div><strong>HSE RDM</strong> Sponsor: Liz Trinkle HSEDM will plan and implement various fundraising activities to earn money for Riley Hospital leading up to the Dance Marathon in March!</div><div>Habitat for Humanity Sponsor: Robin Townsend, Meghan Miller The purpose of a Habitat for Humanity (HFH) campus chapter at HSE High School is to educate students about housing needs within Hamilton County, to provide financial support for Hamilton County HFH through fundraising, to organize service opportunities allowing students to aid in the construction of homes, and to advocate for better and more affordable living conditions in our community.</div><div> </div><div><strong>Interact Club</strong> Sponsor: Gaye Garrett This is a service oriented club sponsored by the Fishers Rotary Club and part of the Rotary International Organization. We offer students the opportunity to become involved in volunteer service opportunities in our school, community, and with an international focus. Members are required to participate in two service opportunities per semester as well as an ‘all club’ project during the school year. The goal of the club is to promote the Rotary ideal of “Service above Self”.</div><div> </div><div><strong>Key Club</strong> Sponsors: Sarah Chattin & Ken Link Key Club is the student affiliate of Kiwanis International. They are a service organization that sponsors the school blood drives, has Melanoma Awareness Week, raises funds for UNICEF’s Eliminate project and helps to feed the underserved in Hamilton County, among other projects.</div><div> </div><div><strong>Make A Wish</strong> Sponsor: Jackie Purcell In Make A Wish club, we will raise money through doing different fundraisers for children with life threatening diseases to have their wish granted.</div><div> </div><div><strong>National Honor Society</strong> Sponsors: Amy Shipley & Jill McGrath This is an organization that rewards students for their academic achievements and service to the community and school. In order to be a member, a student must complete an application in March of his/her sophomore or junior year. A student must have earned a cumulative grade point average of 3.5 or higher and participated in clubs, organizations or athletics. The student’s application will be reviewed by a faculty committee and acceptance will be based on the factors of scholarship, leadership, character and service. Inductions will take place in the fall of every school year. For more information, please contact Mrs. Shipley at (317) 594‐4190.</div><div> </div><div><strong>Project Hope</strong> Sponsor: Patty Kulsavage Project H.O.P.E. strives to help others prosper every day. We help the community around us in every way possible. This club strives to make HSE a better place every day.</div><div> </div><div><strong>Riley Dance Marathon</strong> Sponsors: Elizabeth Trinkle, Dana Simmons, Tia McClung, Katie Sellers Matthew Springer Memorial Riley Dance marathon (aka HSE – RDM) is a service organization dedicated to raising money for Riley Children’s Hospital in memory of our former HSE student Matthew Springer. We do a variety of fundraisers throughout the year culminating in a dance marathon in the spring all “for the kids”. FTK...No, you do not have to be a great dancer!!!!!!!!!!!!!</div><div> </div><div><strong>Student Council</strong> Sponsors: Emily Curnow, Hannah Hunt, Caroline Emerson Student Council is an opportunity for students to be the voice of HSE, along with planning homecoming activities, volunteering, and running the annual food drive.</div><div> </div><div><strong>We Are One Club</strong> Sponsor: Vickie Lazaga, Becky Schroeder, Rhonda St. Hilliare Students get together and help out (community); have tournaments and students compete to fundraise for supplies for natural disasters for poor communities.</div><div></div>`
  },
  perspective: {
    name: "Expanding Perspective",
    description: "bla",
    data: `<div><strong>World Connection Club</strong> Sponsor: Vickie Lazaga Open to any HSE student. Members sponsor several activities involving our foreign exchange students to welcome them to America and to also learn about their country. Our activities are fun, but also help us appreciate American culture while learning about other world cultures. Activities include our sponsorship of a South American child, participation in the Renaissance Fair, Billericay Day and trips to foreign restaurants. For more information, please contact Mrs.Lazaga at (317) 594‐4190.</div><div> </div><div><strong>Best Buddies High School</strong> Sponsor: Morgan Rumple, Barb Onufrock Best Buddies is a nonprofit 501(c)(3) organization dedicated to establishing a global volunteer movement that creates opportunities for one-to-one friendships, integrated employment and leadership development for people with intellectual and developmental disabilities.</div><div> </div><div><strong>Black Student Union</strong> Sponsor: Jagga Rent Our purpose is to educate and celebrate the black culture. We unify HSE student body through expression and appreciation of African American culture.</div><div> </div><div><strong>Gay/Straight Alliance</strong> Sponsor: Shawn Porter, Dana Simmons, Kim Bakle Provide a place for LGBTQS folks to hang out, talk about current issues, etc.</div><div> </div><div><strong>Muslim Student Association</strong> Sponsor: Wafa Safi-Hassan This club is devoted to creating a sense of community for Muslim students (and friends) through service and activism, educating both Muslims and people of other faiths about the religion of Islam, and facilitating a better environment for students on campus. For more information, please contact Wafa Safi‐Hassan at <a href=mailto:wsafi@hse.k12.in.us>wsafi@hse.k12.in.us</a>.</div><div> </div><div><strong>World Connections Club</strong> Sponsor: Vickie Lazaga Open to any HSE student. Members sponsor several activities involving our foreign exchange students to welcome them to America and to also learn about their country. Our activities are fun, but also help us appreciate American culture while learning about other world cultures. Activities include our sponsorship of a South American child, participation in the Renaissance Fair, Billericay Day and trips to foreign restaurants. For more information, please contact Mrs.Lazaga at (317) 594‐4190.</div><div> </div><div><strong>Friendship Bracelet Club</strong> Sponsor: Kelli Hanes To promote making bracelets and friendship.</div><div> </div><div><strong>Philosophy Club</strong> Sponsor: Brian Pletcher Students will study the great philosophers, world views and religions of the world based on their own belief system. The format will encourage open discussion, Socratic dialogs, questioning, and healthy debate in order to help students understand other views and to defend and stretch their own views. For more information, please contact Mr. Pletcher at (317) 594‐4190.</div><div> </div>`
  },
  literatureArtCooking: {
    name: "Literature, Art & Cooking",
    description: "bla",
    data: `<div><strong>Book Club</strong> Sponsor: Karin Foster Join others to talk about books, share and swap books, watch a movie based on a book and more! Stop by and check it out!</div><div> </div><div><strong>Crafting For Kids</strong> Sponsor: Kim Bakle Create DIY crafts for children at Riley!</div><div> </div><div><strong>Crafts/Pinterest Club</strong> Sponsor: Lindsay Mahan Craft/Pinterest brings students together to develop our crafty side! Students will meet monthly to participate in a craft and encourage community by working together. Options for completing service projects in the way of crafts are being developed.</div><div> </div><div><strong>Creative Writing</strong> Sponsor: Haylea Quaranta All students with a common interest of all genres of writing fiction, poetry, narrative, biography, theater, screenplays, etc., and who want to share their creative talents and ideas with others.</div><div> </div><div><strong>Quill and Scroll</strong> Sponsors: David Young & Jordan Klobusnik Quill and Scroll International Society for high school journalists (journalism honor society)</div><div> </div><div><strong>Harry Potter Club</strong> Sponsor: Peter Salvadori We are a social interest club that does events and activities that focus on the magical world created in JK Rowling’s famous book series: Harry Potter.</div><div> </div><div><strong>Baking Club</strong> Sponsor: Cynthia Ziemba Baking enthusiasts come together to learn, practice, refine their culinary skills.</div><div> </div>`
  },
  political: {
    name: "Politics",
    description: "bla",
    data: `<div><strong>Royal Students for Life</strong> Sponsors: Kelly Wagoner To educate peers about the pro-life movement and help the pro-life community through support and awareness.</div><div> </div><div><strong>GOP</strong> Sponsor: Dottie Beegle Encourage diverse students to create leadership skills, engage in civil discourse and share and promote republican ideas and candidates.</div><div> </div><div><strong>HSE Democrats</strong> Sponsor: Brenda Barrett The Democrat club is a student led organization that is open to all students who want to discuss current events, volunteer for local campaigns, engage with guest speakers, register voters and give back to the community. Meetings will be in J221 monthly/bi-monthly.</div><div> </div><div><strong>HSE Republicans</strong> (This is an actual club but doesn’t have any info yet, we can update it later)</div><div> </div>`
  },
  competitive: {
    name: "Competition",
    description: "bla",
    data: `<div><strong>Academic Team</strong> Sponsors: Sandy Riley, John Drodz This team has many different possibilities for students to show their knowledge in a team competition format, and consists of Quiz Bowl, Spell Bowl, and Super Bowl. Further, Super Bowl consists of teams of major disciplines (English, Math, Science, Social Studies, and Fine Arts).</div><div> </div><div><strong>DECA</strong> Sponsors: Kristin Lidstrom, Adam Broughton, Shawn Crull, Kari Richardson Competitive club for high school business students. DECA prepares emerging leaders and entrepreneurs, in marketing, finance hospitality and management, to be career and college ready.</div><div> </div><div><strong>Destination Imagination</strong> Sponsor: Kristy Seitz We are a creative problem solving academic team that competes in the regional, state and global communities. It involves problem solving, creativity and teamwork to solve 6 internationally published challenges. Students from their own teams up to 7 members and compete in both a central challenge and an instant challenge and numerous leadership roles within the chapter and throughout the state.</div><div> </div><div><strong>Math Team</strong> Sponsors: Mary Carson, Christine Hamilton, Naomi Jackson This team is composed of students who are interested in socializing with others while problem- solving. This club sponsors mathematics competitions including Mathfax, Indiana Math League, Rose Hulman Math day, the American Mathematics Competition, and the Indiana State Math competition. Students must be active members of Math Club in order to be eligible for Mu Alpha Theta National Mathematics Honorary. This club is open to any student.</div><div> </div><div><strong>Mock Trial Team</strong> Sponsor: Janet Chandler Team members must audition to participate in this competitive team. Mock trial participates in county, regional, state, and national competitions. Mock Trial team members encompass all four grades. They are students who enjoy acting, public speaking, and law.</div><div> </div><div><strong>Speech and Debate Team</strong> Sponsors: Bob Hinshaw Our speech and debate team is committed to two things: helping students enjoy and succeed in the art of public speaking and persuasion, as these skills are essential in life, and to having fun while doing so! We are a competitive in the Hoosier Crossroads Conference and can help any student who wishes to learn and develop skills to be successful in a variety of dramatic events, like poetry reading or original oratory, limited preparation speaking events, like expository and/or informative speaking, and various styles of debate, like public forum or Lincoln-Douglas debate.</div><div> </div><div><strong>We The People</strong> Sponsor: Janet Chandler We the People is included in an AP Government class. Team members form smaller groups to study the Constitution. Units deal with the philosophy and history behind the Constitution in addition to applications to the present day. The team competes at regional and state level. The state winner advances to a national competition.</div><div> </div><div><strong>Bowling</strong> Sponsor: Andrea McAlister We meet at Pinheads two times per week for practice and competitions.</div><div> </div><div><strong>Chess Club</strong> Sponsors: Curry Harden, Peter Salvadori To learn about chess; to improve our skill level and to compete competitively.</div><div> </div><div><strong>Robotics Club</strong> Sponsor: Josh Gish To promote the application of STEM through the use of robotics. Come design, build, program and test robots using the VEX Platform. We participate in custom in‐house competitions each nine weeks and in out of house competitions as well. No experience necessary.</div><div> </div>`
  }
};


// Generate Form On page
function LoadForm() {
  for ( var i = 0; i < form.length; i++ ) {
    $( "#loadForm" ).append( "<h3>" + form[i].question + "</h3>" );
    for ( var j = 0; j < form[i].options.length; j++ ) {
      var attr = generateAttr( form[i].options[j].values );
      $( "#loadForm" ).append( "<label><input class=uk-checkbox type=checkbox " + attr + "> " + form[i].options[j].text  + "</label><br>" );
    }
    $( "#loadForm" ).append( "<br>" );
  }
}


// Generate Attr for each check box
function generateAttr( obj ) {
  var keys = Object.keys( obj );
  var values = Object.values( obj );
  var result = "";

  for ( var i = 0; i < keys.length; i++ ) {
    result += keys[i] + "=" + values[i] + " ";
  }

  return result;
}



// Generate Results
function checkResults() {
  var results = {};

  for ( var i = 0; i < categories.length; i++ ) {
    $( 'input:checkbox:checked[' + categories[i] + "]" ).each(function () {
      if ( !results[ categories[i] ] ) {
        results[ categories[i] ] = 0;
      }
      results[ categories[i] ] += parseInt( $( this ).attr( categories[i] ) );
       // sportsVal += parseInt( $( this ).attr( "sports" ) );
    });
  }
  generateResults( results );
  console.log( results );
}

function generateResults( data ) {
  var count = 0;
  var max = 0;
  var maxName = "";
  for ( var i = 0; i < Object.values( data ).length; i++ ) {
    count += Object.values( data )[i];
    if ( Object.values( data )[i] > max ) {
      max = Object.values( data )[i];
      maxName = Object.keys( data )[i]
    }
  }
  if ( resultsTitles[ maxName ] && resultsTitles[ maxName ].name ) {
    $( "#titleInfo" ).html( "<b>" + resultsTitles[ maxName ].name + "</b> is your best match ( " + Math.floor(( max / Object.values( data ).length ) * 100 ) + "% )" );
    $( "#resultClubs" ).html( resultsTitles[ maxName ].data );
  } else {
    $( "#titleInfo" ).html( "Well that's boring!" );
    $( "#resultClubs" ).html( "<center>If you don't feel like filling out the lengthy quiz you can explore all the clubs below.<br><br></center>" );
  }
  // $( "#resultPercentage" ).text( Math.floor(( max / Object.values( data ).length ) * 100 ) );
  // $( "#resultName" ).text( resultsTitles[ maxName ].name  );
//   $( "#resultDescription" ).text( resultsTitles[ maxName ].description  );

  console.log( resultsTitles[ maxName ].name );
}


$( document ).ready(function() {
    LoadForm();
});
