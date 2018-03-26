var pages = {
  schema: [
    {
      pid: 0,
      title: "Page One",
      url: "page-one",
      header: 1,
      content: null,
      footer: 1,
      advertisement: null
    },
    {
      pid: 1,
      title: "Page Two",
      url: "page-two",
      header: 1,
      content: 1,
      footer: 1,
      advertisement: null
    },
    {
      pid: 2,
      title: "Page Three",
      url: "page-three",
      header: 1,
      content: 2,
      footer: 2,
      advertisement: null
    },
    {
      pid: 3,
      title: "Page Four",
      url: "page-four",
      header: 2,
      content: 3,
      footer: 1,
      advertisement: 1
    }
  ],
  header: [
    {
      id: 1,
      content:
        '<div class="header-content"><h1>Header One</h1><span class="italic">Sed sit amet felis in nisi.</span></div>'
    },
    {
      id: 2,
      content:
        '<div class="header-content"><h1>Header Two</h1><span class="italic">Suspendisse at magna metus.</span></div>'
    }
  ],
  content: [
    {
      id: 1,
      heading: "Body One",
      content:
        '<div class="body-content"><h3>sunt in culpa qui officia deserunt mollit anim id est</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div></div>'
    },
    {
      id: 2,
      heading: "Body Two",
      content:
        '<div id="body-content"><p>Nulla ac ante ac leo ullamcorper faucibus. Nunc sodales finibus mattis.</p><p>Ut sagittis, sapien sed fringilla vulputate, massa purus tincidunt est, sed sagittis eros ligula sed elit. Nam sed pellentesque sapien, sit amet fringilla arcu. Nunc sagittis placerat massa, in gravida libero consectetur a. Maecenas euismod diam sit amet ligula ornare consequat. Rutrum bibendum. Nam venenatis neque ante, et lacinia turpis pretium a. Etiam a ipsum at ante varius maximus. Vestibulum aliquam ex sed condimentum tristique. Aenean sem nibh, dignissim facilisis neque a, fermentum ornare massa. Etiam nec fringilla diam. Donec at eros sed massa vulputate luctus sit amet nec ipsum. Morbi lorem ex, luctus id rutrum quis, luctus a metus. Ut sit amet libero nunc. Etiam arcu tellus, efficitur in interdum in, consequat vel ex. Mauris est dolor, commodo sit amet condimentum eget, posuere non magna. Etiam nec arcu nec nulla vulputate ornare nec ut erat. Donec hendrerit ac felis vitae aliquam. Fusce faucibus est eget est dictum consequat.</p><p>Morbi tortor risus, vehicula eget dolor sed, varius fringilla lacus. Morbi odio ipsum, mollis sed laoreet ut, congue nec libero. Nulla auctor nec tellus cursus tristique. Maecenas feugiat, est vitae euismod bibendum, velit nisl suscipit dui, ut tempus est sem a lacus. Integer finibus ipsum at ultrices dictum. Cras a viverra eros. Integer eleifend luctus est quis aliquam. Pellentesque eget eleifend sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eros lacus, convallis id molestie viverra, dignissim non lacus. Integer sed ante vel purus finibus rhoncus nec eu diam.</p><p>In facilisis risus urna, quis pulvinar urna sollicitudin vel. Vestibulum porta bibendum libero, ut pharetra ligula. Etiam ex eros, elementum vel massa et, mattis consectetur neque. Nunc et dolor vitae libero commodo vulputate. Nunc mattis tincidunt dolor. Aenean ultrices eleifend risus eget aliquam. Etiam non tincidunt nisl, vel aliquam lectus. Integer euismod dapibus lacus, eu posuere enim dapibus et.</p></div>'
    },
    {
      id: 3,
      heading: "Body Three",
      content:
        '<div class="body-content"><div id="lipsum"><p>Morbi euismod sollicitudin diam eu rhoncus. Ut ante nunc, varius nec ultricies sed, quis congue ante massa porta orci. Aenean mi ex, hendrerit vel augue sit amet, tempor lacinia metus. Ut lobortis, dolor ac lacinia fringilla, lorem leo scelerisque velit, ac sagittis neque dui at metus. Etiam a vestibulum ligula. Mauris placerat est vel suscipit efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean pellentesque lacus orci, at consequat odio posuere sed. Aenean sit amet augue suscipit, suscipit nisi vel, efficitur mi.</p><p>Curabitur rhoncus pulvinar ex, vel commodo mi ornare at. Nunc ut dui quis nibh eleifend varius. Duis sodales eu ligula ac blandit. Quisque suscipit lorem sed urna ornare, a aliquet risus ornare. Maecenas commodo, sem eget semper mollis, felis ligula egestas felis, vitae rhoncus nisl mauris in nisl. Integer efficitur volutpat mi, congue maximus ante aliquet ac. Ut augue sapien, mattis non venenatis rhoncus, elementum at turpis. Sed pretium erat ut metus pellentesque vehicula. Proin sit amet erat erat. Sed rhoncus dapibus metus, nec faucibus leo faucibus et. Nullam sagittis justo vel tellus feugiat tincidunt vel vitae ipsum.</p></div></div>'
    }
  ],
  footer: [
    { id: 1, content: '<div class="footer-content"><h4>Footer One</h4></div>' },
    { id: 2, content: '<div class="footer-content"><h4>Footer Two</h4></div>' }
  ],
  advertisement: [
    {
      id: 1,
      heading: "Advertisement One",
      image: {
        imageSrc: "./images/childatplay.jpg",
        imageLink: "https://kidshealth.org/en/parents/growth/",
        imageAltText: "Help your child grow"
      },
      content:
        '<div class="advertisement-content">Quisque vel lacus at purus aliquam facilisis. Suspendisse in nulla sit amet mauris mattis tempus. Integer tellus leo, rutrum id purus nec, ultricies finibus massa. Aliquam luctus nisi pretium, tempus nunc eu, vestibulum magna. Integer vitae diam tincidunt, luctus risus a, hendrerit urna. Etiam semper erat sed lacus condimentum rhoncus.</div>'
    }
  ]
};
