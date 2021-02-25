//Uses feednami
//https://toolkit.sekando.com/docs/en/feednami

function getRssFeed() {
    let url1 = "https://www.dr.dk/nyheder/service/feeds/udland";
    let url2 = "https://www.dr.dk/nyheder/service/feeds/indland";

    fetchFeed(url1);
    fetchFeed(url2);
}

function fetchFeed(url) {
    const textarea = document.querySelector('#feed-textarea > ul');
  
    feednami.load(url)
    .then(feed => {
        textarea.value = ''
        console.log(feed);
        var i = 0;
        for(let entry of feed.entries){
            //create a list element
            let li = document.createElement('li');
            //add HTML content to list items
            li.innerHTML = `<h4><a href="${entry.link}">${entry.title}</a></h4>`;
            //append HTML content to list 
            textarea.appendChild(li);

            //only load the first 5 feeds
            i++;
            if(i == 5) {
                break;
            }
        }
    });
}

function expand(event) {
    document.getElementById("sidepanel").style.marginLeft = "360px";
}

function collapse(event) {
    document.getElementById("sidepanel").style.marginLeft = "0px";
}

