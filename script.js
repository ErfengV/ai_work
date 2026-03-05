// 初始化粒子效果
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#6c5ce7'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#6c5ce7',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
});

// 按钮点击效果
document.getElementById('startBtn').addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 100);

    document.getElementById('agents').scrollIntoView({
        behavior: 'smooth'
    });
});

// 智能体卡片悬停效果
const agentCards = document.querySelectorAll('.agent-card');
agentCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = 'var(--primary)';
        this.style.boxShadow = '0 20px 40px rgba(108, 92, 231, 0.2)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.borderColor = 'var(--glass-border)';
        this.style.boxShadow = 'none';
    });
});

// 监控卡片悬停效果
const metricCards = document.querySelectorAll('.metric-card');
metricCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = 'var(--primary)';
        this.style.boxShadow = '0 20px 40px rgba(108, 92, 231, 0.2)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.borderColor = 'var(--glass-border)';
        this.style.boxShadow = 'none';
    });
});

// 导航栏滚动效果
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
}, false);

// 添加滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察智能体卡片
document.querySelectorAll('.agent-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// 观察监控卡片
document.querySelectorAll('.metric-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// 打字机效果
const terminalLines = [
    '> 启动春笋联盟工作室...',
    '> 加载智能体模块...',
    '> 初始化监控服务...',
    '> ✅ 所有系统就绪',
    '> 🎉 春笋联盟运行中！'
];

let lineIndex = 0;
let charIndex = 0;
const logContent = document.querySelector('.panel-content');

function typeLine() {
    if (lineIndex < terminalLines.length) {
        if (charIndex < terminalLines[lineIndex].length) {
            logContent.innerHTML += terminalLines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeLine, 100);
        } else {
            logContent.innerHTML += '<br>';
            lineIndex++;
            charIndex = 0;
            setTimeout(typeLine, 500);
        }
    }
}

// 页面加载完成后开始打字机效果
window.addEventListener('load', function() {
    setTimeout(typeLine, 1000);
});

// 鼠标移动效果
document.addEventListener('mousemove', function(e) {
    const hero = document.querySelector('.hero');
    const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 20;

    if (hero) {
        hero.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// 添加页面加载进度条
function createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary), var(--accent));
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    return progressBar;
}

let progressBar = createProgressBar();

function updateProgress(percentage) {
    progressBar.style.width = percentage + '%';
}

// 模拟页面加载进度
let progress = 0;
const interval = setInterval(() => {
    progress += Math.random() * 10;
    if (progress > 100) {
        progress = 100;
        clearInterval(interval);
    }
    updateProgress(progress);
}, 100);

// 页面完全加载后隐藏进度条
window.addEventListener('load', function() {
    setTimeout(() => {
        progressBar.style.opacity = '0';
        setTimeout(() => {
            progressBar.remove();
        }, 300);
    }, 500);
});

// 添加一些随机粒子爆炸效果
function createParticleExplosion(x, y) {
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--primary);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${x}px;
            top: ${y}px;
            animation: particleExplosion 1s ease-out forwards;
        `;

        document.body.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 100 + 50;

        particle.style.animation = `particleExplosion 1s ease-out forwards`;
        particle.style.setProperty('--x', `${Math.cos(angle) * velocity}px`);
        particle.style.setProperty('--y', `${Math.sin(angle) * velocity}px`);

        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes particleExplosion {
        to {
            transform: translate(var(--x), var(--y));
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 监听鼠标点击创建粒子爆炸
document.addEventListener('click', function(e) {
    if (e.target.tagName !== 'BUTTON') {
        createParticleExplosion(e.clientX, e.clientY);
    }
});

// 添加键盘快捷键
document.addEventListener('keydown', function(e) {
    if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        document.getElementById('startBtn').click();
    }
});

// 添加页面滚动时的视差效果
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-elements .element');

    parallaxElements.forEach((element, index) => {
        const speed = 0.1 + (index * 0.05);
        element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// 实时监控系统状态
function updateSystemMetrics() {
    const metrics = [
        { element: document.querySelector('.metric-value:nth-child(1)'), value: 98.5 },
        { element: document.querySelector('.metric-value:nth-child(2)'), value: 1200 },
        { element: document.querySelector('.metric-value:nth-child(3)'), value: 12 },
        { element: document.querySelector('.metric-value:nth-child(4)'), value: 72 }
    ];

    metrics.forEach(metric => {
        const currentValue = parseFloat(metric.element.textContent);
        const targetValue = metric.value;
        const increment = (targetValue - currentValue) / 50;

        const updateValue = () => {
            if (Math.abs(metric.element.textContent - targetValue) > 0.1) {
                metric.element.textContent = (parseFloat(metric.element.textContent) + increment).toFixed(1);
                setTimeout(updateValue, 20);
            } else {
                metric.element.textContent = targetValue.toFixed(1);
            }
        };

        updateValue();
    });
}

// 启动监控系统
setInterval(updateSystemMetrics, 1000);

// 智能体状态监控
function updateAgentStatus() {
    const agentCards = document.querySelectorAll('.agent-card');
    agentCards.forEach((card, index) => {
        setTimeout(() => {
            const statusDot = card.querySelector('.status-dot');
            if (statusDot) {
                statusDot.style.backgroundColor = '#00b894';
            }
        }, index * 200);
    });
}

// 启动智能体状态监控
setTimeout(updateAgentStatus, 1000);

// 添加动态背景效果
function createDynamicBackground() {
    const background = document.getElementById('particles-js');
    if (background) {
        background.style.background = `
            radial-gradient(ellipse at top, #1a1a2e 0%, #16213e 50%, #0f0f0f 100%),
            linear-gradient(45deg, rgba(108, 92, 231, 0.1) 0%, transparent 50%, rgba(253, 121, 168, 0.1) 100%)
        `;
    }
}

// 启动动态背景
createDynamicBackground();