const body = document.body
// 返回与指定的选择器组匹配的文档中的元素列表 (使用深度优先的先序遍历文档的节点)。返回的对象是 NodeList 。
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

// 绑定事件
rightBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slides.length -1) {
        activeSlide = 0
    }
    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if(activeSlide < 0) {
        activeSlide = slides.length - 1
    }
    setBgToBody()
    setActiveSlide()
})

setBgToBody()

// 设置body的背景图片
function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

// 设置active
function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}