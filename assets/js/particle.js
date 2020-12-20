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

// It checks if there is at least one element
if (allElements.length > 0) {
	//It runs the script for each found element
	allElements.forEach((element) => {
		const txtElement = element,
			wordsList = txtElement.getAttribute('data-words'),
			words = wordsList.split(', '); // It makes an array of words from data attribute

		let wordsCount = 0;

		entry();

		// Initial function
		function entry() {
			if (wordsCount < words.length) {
				// It runs the code for each word
				let word = words[wordsCount],
					txtArr = word.split(''), // It makes an array of letters in the word
					count = 0;

				txtElement.textContent = ''; // It removes the previous text from the element

				// For each letter in the array
				txtArr.forEach((letter) => {
					// It replaces the empty space for the "non-break-space" HTML...
					// ... This is needed to separate the words properly
					let _letter = letter === ' ' ? '&nbsp;' : letter;

					// It wraps every letter with a "span" and puts all they back to the element
					txtElement.innerHTML += `<span>${_letter}</span>`;
				});

				let spans = txtElement.childNodes;

				const letterInterval = setInterval(activeLetter, 80); // Sets interval between each letter showing

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
					// It sets the interval between each letter hiding
					let removeInterval = setInterval(removeLetter, 40);
					count--;

					function removeLetter() {
						spans[count].classList.remove('active');
						count--;

						if (count === -1) {
							clearInterval(removeInterval);
                            wordsCount++;

							entry(); // After removing the last letter, call the initial function again
						}
					}
				}
			} else {
				// If the code reaches the last word
				// It resets the words counter...
				wordsCount = 0;
				// ...and calls the initial function again.
				entry();
			}
		}
	});
}
