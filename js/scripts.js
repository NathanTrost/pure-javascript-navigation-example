navigation.appendChild(getNavigation());

renderPage();

// If page has been reloaded we sniff the url to get the appropriate key
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  const url = window.location.href;
  const currentHash = url.split("#")[1];
  const pageSchema = pages.schema.filter(each => each.url === currentHash)[0];
  renderPage(pageSchema.pid);
}

function renderPage(pageId = 0) {
  const sections = ["header", "content", "advertisement", "footer"];
  const pageSchema = pages.schema.filter(each => each.pid === pageId)[0];

  sections.map(section => {
    if (pageSchema[section]) {
      document.getElementById(section).innerHTML = getContentFromSchema(
        pageSchema,
        section
      );
    } else {
      document.getElementById(section).innerHTML = "";
    }
  });
}

function getContentFromSchema(currentPageSchema, section) {
  const result = pages[section].filter(
    each => each.id === currentPageSchema[section]
  )[0];
  if (!result) return;
  const heading = getHeadingIfExists(result, section);
  const image = getImageIfExists(result, section);
  return `<div class='${section}-wrapper'>
            ${heading}
            ${image}
            <div class='${section} ${section}-${result.key}'>
                ${result.content}
            </div>
        </div>`;
}

function onNavigationClick(pageId) {
  renderPage(pageId);
}

function getNavigation() {
  let navigation = document.createElement("div");
  navigation.className = "navigation-wrapper";
  let navList = document.createElement("ul");

  pages.schema.map(each => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.innerHTML = each.title;
    link.href = `#${each.url}`;
    link.onclick = () => {
      onNavigationClick(each.pid);
    };

    listItem.appendChild(link);
    navList.appendChild(listItem);
  });
  navigation.appendChild(navList);
  return navigation;
}

function getImageIfExists(result, section) {
  if (!result.image) {
    return "";
  }
  const { imageSrc, imageLink, imageAltText } = result.image;
  let imageOpen, imageClose;
  if (imageLink) {
    imageOpen = `<a class='${section}-image-wrapper image-link' href='${imageLink}'>`;
    imageClose = `</a>`;
  } else {
    imageOpen = `<div class='${section}-image-wrapper' >`;
    imageClose = `</div>`;
  }
  return `${imageOpen}
            <img src='${imageSrc}' alt="${imageAltText}"/>
        ${imageClose}`;
}

function getHeadingIfExists(result, section) {
  if (!result.heading) {
    return "";
  }
  return `<h3 class='${section}-header' >${result.heading}</h3>`;
}
