import React, { useEffect, useRef } from 'react'
import { motion } from "motion/react"


function CanvasLine() {


	return (
		<motion.div id='career' className='mt-6 mb-6'
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				delay: 0.25,
				ease: 'easeIn'
			}}
		>
			<h4 className='mb-4'>Career</h4>
			<div className='mt-8'>
				<svg width="100%" height="100%" viewBox="0 0 1071 255" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 1.5 }}>
					<g transform="matrix(1,0,0,1,-3.96052,-20.2745)">
						<g transform="matrix(1.48592,0,0,0.885657,-254.647,-385.03)">
							<path d="M174.375,462.068L892.411,465.412C892.411,465.412 894.458,465.689 894.417,467.609C894.371,469.761 892.322,469.949 892.322,469.949L174.375,462.068Z" style={{ fill: "hsl(var(--foreground))", stroke: "hsl(var(--foreground))", strokeWidth: "1.06px" }} />
						</g>
						<g transform="matrix(1.50481,0,0,1.50481,4.42669,-71.3958)">
							<circle cx="191.382" cy="64.417" r="3.498" style={{ fill: "rgb(216,123,28)" }} />
						</g>
						<g transform="matrix(1.1297,0,0,1.1297,-29.5718,1.0478)">
							<path d="M400.529,57.946L400.529,196.489
			C400.529,198.006 398.486,198.049 395.97,198.049
			L169.391,198.049
			C166.875,198.049 164.832,196.006 164.832,193.489
			L164.832,60.946
			C164.832,62.43 166.875,60.387 169.391,60.387
			L395.97,60.387
			C400.486,60.387 400.529,62.43 400.529,63.946Z" style={{ fill: "hsl(var(--primary-foreground))" }} />
						</g>
						<g transform="matrix(0.952394,0,0,0.774484,15.0858,6.79351)">
							<g transform="matrix(0.813197,0,0,1,42.6124,0)">
								<g transform="matrix(15.4942,0,0,15.4942,262.583,50.5051)">
								</g>
								<text x="290.114px" y="60.505px" style={{ fontFamily: 'Helvetica', fontSize: "18.494px", fill: "hsl(var(--foreground))" }}>2021</text>
							</g>
						</g>
						<g transform="matrix(0.898414,0,0,1,18.0562,0)">
							<g transform="matrix(12,0,0,12,275.888,77.9426)">
							</g>
							<text x="177.163px" y="115.943px" style={{ fontFamily: 'Helvetica', fontSize: "24px", fill: "hsl(var(--foreground))", fontWeight: "bold", lineHeight: "24px" }}>Software Engineer</text>
						</g>
						<g transform="matrix(8.75525,0,0,8.75525,270.729,91.6125)">
						</g>
						<text x="179.38px" y="145.613px" style={{ fontFamily: 'Helvetica', fontSize: "19px", fill: "hsl(var(--foreground))" }}>RapidData Technologies</text>
					</g>
				</svg>
			</div>
		</motion.div>

	)
}

export default CanvasLine