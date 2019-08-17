class Blog {
    constructor() {
        this.setInitVariables();
        this.registerEvents();
        this.linkedSet = new Set();
        console.log("sucess constructor : ", this);
    }

    setInitVariables() {
        this.blogList = document.querySelector(".blogList > ul");
    }

    registerEvents() {
        const startBtn = document.querySelector(".start");
        const dataURL = "data/data.json";
        startBtn.addEventListener("click", () => {
            this.setInitData(dataURL);
        });

        this.blogList.addEventListener("click", ({ target }) => {
            const targetClassName = target.className;
            if (targetClassName !== "like" && targetClassName !== 'unlike') return;
            const postTitle = target.previousElementSibling.previousElementSibling.textContent;
            if(targetClassName === "unlike"){
                target.className="like";
                target.innerText="찜 하기";
                this.linkedSet.delete(postTitle);
            }else {
                target.className ="unlike";
                target.innerText = "찜 취소";
                this.linkedSet.add(postTitle);
            }

            //내 찜 목록 뷰에 추가.
			this.updateLikedList();
        });
    }

	updateLikedList() {
		const ul = document.querySelector(".like-list > ul");
		let likedSum = "";

		//li태그에 찜리스트를 넣고 한번의 innerHTML을 사용한다.
		this.linkedSet.forEach ( (v) => {
			likedSum += `<li> ${v} </li>`;
		})

		ul.innerHTML = likedSum;
    }
    
    setInitData(dataURL) {
        this.getData(dataURL, this.insertPosts.bind(this));
    }

    getData(dataURL, fn) {
        const oReq = new XMLHttpRequest();
        oReq.addEventListener("load", () => {
            const list = JSON.parse(oReq.responseText).body;
            fn(list);
        });
        oReq.open('GET', dataURL);
        oReq.send();
    }

    insertPosts(list) {
        list.forEach((v) => {
            this.blogList.innerHTML += `
				 <li>
                     <a href=${v.link}> ${v.title} </a>
                     <p>${v.sub}</p>
				 	<div class="like">찜하기</div>
				 </li>
				 `;
        });
    }
}

export default Blog;