/* ---- Source - https://github.com/VincentGarreau/particles.js/ */
/* ---- particles.js config ---- */

const target = document.getElementById( 'interestedIn' );
const shuffle = ( data ) => {
	let index = data.length - 1, temporary, random;

	for ( index = index; index > 0; index-- ) {
		random = Math.floor( Math.random() * index );
		temporary = data[ index ];
		data[ index ] = data[ random ];
		data[ random ] = temporary;
	}
	return data;
}
const fetchInterests = () =>
	$.ajax( { url: "assets/data/interests.json" } )
		.done( res => res )
		.fail( ( msg ) => console.log( msg ) )

particlesJS( 'particles-js', {
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
			'repulse': {
				distance: 100,
				duration: 0.7
			},
			'bubble': {
				distance: 50,
				size: 10,
				duration: 1.5,
			}
		}
	},
	retina_detect: true
})

fetchInterests()
	.then(
		( data ) => {
			const interests = shuffle(data.interests.map( i => i.interest ))

			let wordsCount = 0;
			entry();
			function entry() {
				if ( wordsCount < interests.length ) {
					const word = interests[ wordsCount ]
					const charArray = word.split( '' )
					let count = 0;
					target.textContent = '';
					charArray.forEach( ( spaceOrLetter ) => {
						// space or letter?
						const char = spaceOrLetter === ' '
							? '&nbsp;'
							: spaceOrLetter;
						// Wrap letter in "span" and put it back into the element
						target.innerHTML += `<span>${ char }</span>`;
					} )

					const spans = target.childNodes;
					const letterInterval = setInterval( activeLetter, 80 );
					function activeLetter() {
						spans[ count ].classList.add( 'active' )
						count++

						if ( count === spans.length ) {
							clearInterval( letterInterval )
							setTimeout( () => eraseText(), 1500 )
						}
					}
					function eraseText() {
						const removeInterval = setInterval( removeLetter, 40 )
						count--
						function removeLetter() {
							spans[ count ].classList.remove( 'active' )
							count--

							if ( count === -1 ) {
								clearInterval( removeInterval )
								wordsCount++
								entry()
							}
						}
					}
				}
				else {
					wordsCount = 0
					entry()
				}
			}
		}
	)
