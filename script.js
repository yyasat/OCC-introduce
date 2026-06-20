// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 按钮点击效果
document.querySelectorAll('.pixel-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // 这里可以添加弹窗或跳转逻辑
        alert('角色详情功能待开发！\n你可以在这里添加更多角色信息。');
    });
});

// 卡片悬停音效模拟（可选）
document.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        // 可以添加像素风音效
        console.log('Card hover effect');
    });
});

// 页面加载动画
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// 像素化效果（彩蛋）
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);
    
    if (konamiCode.join('').includes(konamiSequence.join(''))) {
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 3000);
    }
});