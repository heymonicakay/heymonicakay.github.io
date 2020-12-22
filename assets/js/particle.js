/* ---- Source - https://github.com/VincentGarreau/particles.js/ */
/* ---- particles.js config ---- */

particlesJS('particles-js', {
	particles: {
		number: {
			value: 140,
			density: {
				enable: true,
				value_area: 800
			}
		},
		color: {
			value: "e3845b" // Connector line color
        },
		shape: {
			type: 'polygon', //"circle", "edge", "triangle", "polygon", "star", "image", ["circle", "triangle", "image"]
			stroke: {
				width: 4,
				color: '#fff'
			},
			polygon: {
				nb_sides: 5 // Number of sides on polygon
			},
			image: {
				src: '', // Set Image Path
				width: 100, // Width and height don't decide size.
				height: 100 // They just decide aspect ratio.
			}
		},
		opacity: {
			value: 1,
			random: true,
			anim: {
				enable: true,
				speed: 2,
				opacity_min: 0.2,
				sync: false
			}
		},
		size: {
			value: 8,
			random: true,
			anim: {
				enable: false,
				speed: 10,
				size_min: 10,
				sync: false
			}
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: '#e3845b',
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 3,
			direction: 'none',
			random: false,
			straight: false, // if this is set to true while direction is none, particles will not move.
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
		detect_on: 'window',
		events: {
			onhover: {
				enable: true,
				mode: 'bubble'
			},
			onclick: {
				enable: true,
				mode: 'repulse'
			}
		},
		modes: {
			'repulse' : {
				distance: 100,
				duration: 0.7
			},
			'bubble' : {
                distance: 50,
                size: 10,
                duration: 1.5,
			}
		}
	},
	retina_detect: true
});

const allElements = document.querySelectorAll('.animated-text');

if (allElements.length > 0) {
	allElements.forEach((element) => {
		const txtElement = element,
			wordsList = txtElement.getAttribute('data-words'),
            // Make an array of words
            words = wordsList.split(', ');
		let wordsCount = 0;
		entry();
		function entry() {
			if (wordsCount < words.length) {
				let word = words[wordsCount],
                    //Make an array of the letters
                    txtArr = word.split(''),
					count = 0;
                // clean slate
                txtElement.textContent = '';
				txtArr.forEach((letter) => {
					// space or letter?
					let _letter = letter === ' ' ? '&nbsp;' : letter;
					// Wrap letter in "span" and put it back into the element
					txtElement.innerHTML += `<span>${_letter}</span>`;
                });
                let spans = txtElement.childNodes;
                // Set interval between each letter showing
                const letterInterval = setInterval(activeLetter, 80);
				function activeLetter() {
					spans[count].classList.add('active');
					count++;
					if (count === spans.length) {
						clearInterval(letterInterval);
						setTimeout(() => { // It waits 2 seconds to start erasing the word
							eraseText();
						}, 1500);
					}
				}
				function eraseText() {
					// Set interval between each letter hiding
					let removeInterval = setInterval(removeLetter, 40);
					count--;
					function removeLetter() {
						spans[count].classList.remove('active');
						count--;
						if (count === -1) {
							clearInterval(removeInterval);
                            wordsCount++;
                            entry();
                            // After removing last letter,
                            // call initial function again
						}
					}
				}
            }
            else {
				// If code reaches last word
				// Reset words counter...
				wordsCount = 0;
				// ...and call initial function again.
				entry();
			}
		}
	});
}
