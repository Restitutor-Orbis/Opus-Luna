//Uses feednami
//https://toolkit.sekando.com/docs/en/feednami

function getRssFeed() {
    let url1 = "https://www.dr.dk/nyheder/service/feeds/udland";
    let url2 = "https://www.dr.dk/nyheder/service/feeds/vejret";
    let url3 = "https://www.dr.dk/nyheder/service/feeds/sporten";

    fetchFeed(url1);
    fetchFeed(url2);
    fetchFeed(url3);
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
            li.innerHTML = `<h5><a href="${entry.link}">${entry.title}</a></h5>`;
            //append HTML content to list 
            //create a list element
            let li2 = document.createElement('li');
            //add HTML content to list items
            li2.innerHTML = `<h6><p>${entry.summary}</p></h6>`;
            //append HTML content to list 
            textarea.appendChild(li);
            textarea.appendChild(li2);

            //only load the first 5 feeds
            i++;
            if(i == 8) {
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

