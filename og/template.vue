<template>
	<main
		style="
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			position: relative;
			box-sizing: border-box;
			background: #f6f7f9;
			color: #1a1a1a;
		"
	>
		<!-- 4-color gradient glow: blue (top-left) -->
		<div
			style="
				position: absolute;
				top: -160px;
				left: -160px;
				width: 640px;
				height: 640px;
				display: flex;
				background: radial-gradient(circle, rgba(66, 133, 244, 0.35) 0%, transparent 70%);
			"
		></div>
		<!-- 4-color gradient glow: red (top-right) -->
		<div
			style="
				position: absolute;
				top: -200px;
				right: -120px;
				width: 600px;
				height: 600px;
				display: flex;
				background: radial-gradient(circle, rgba(234, 67, 53, 0.25) 0%, transparent 70%);
			"
		></div>
		<!-- 4-color gradient glow: yellow (bottom-right) -->
		<div
			style="
				position: absolute;
				bottom: -180px;
				right: -100px;
				width: 620px;
				height: 620px;
				display: flex;
				background: radial-gradient(circle, rgba(251, 188, 5, 0.28) 0%, transparent 70%);
			"
		></div>
		<!-- 4-color gradient glow: green (bottom-left) -->
		<div
			style="
				position: absolute;
				bottom: -160px;
				left: -120px;
				width: 580px;
				height: 580px;
				display: flex;
				background: radial-gradient(circle, rgba(52, 168, 83, 0.25) 0%, transparent 70%);
			"
		></div>

		<!-- Top 4-color stripe -->
		<div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; display: flex">
			<div style="display: flex; width: 25%; height: 100%; background: #4285f4"></div>
			<div style="display: flex; width: 25%; height: 100%; background: #ea4335"></div>
			<div style="display: flex; width: 25%; height: 100%; background: #fbbc05"></div>
			<div style="display: flex; width: 25%; height: 100%; background: #34a853"></div>
		</div>

		<!-- Center content -->
		<section
			style="
				position: absolute;
				top: 50%;
				left: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 34px;
				width: 1072px;
				transform: translate(-50%, -50%);
			"
		>
			<img
				:src="faviconSrc"
				width="136"
				height="136"
				alt="Gemini for GitHub favicon"
				style="display: flex; width: 136px; height: 136px; flex-shrink: 0"
			/>
			<div style="display: flex; flex-direction: column; align-items: center; text-align: center">
				<h1
					style="
						margin: 0;
						font-size: 88px;
						line-height: 0.98;
						font-weight: 700;
						display: flex;
						align-items: baseline;
					"
				>
					<span style="color: #202124">Commit with</span>
					<span style="color: #4285f4; padding-left: 22px">Gemini</span>
				</h1>
				<p style="margin: 22px 0 0; font-size: 34px; line-height: 1.28; color: #5f6368">
					{{ subtitle }}
				</p>
			</div>
		</section>

		<!-- Avatars (bottom-right) -->
		<section
			style="position: absolute; right: 64px; bottom: 48px; display: flex; align-items: center"
		>
			<div style="display: flex; align-items: center">
				<div
					style="
						width: 78px;
						height: 78px;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 999px;
						border: 4px solid #f6f7f9;
						background: #ffffff;
						overflow: hidden;
						box-sizing: border-box;
						box-shadow: 0 8px 24px rgba(60, 64, 67, 0.12);
					"
				>
					<img
						:src="claudeAvatarSrc"
						width="78"
						height="78"
						alt="Claude avatar"
						style="display: flex; width: 100%; height: 100%"
					/>
				</div>
				<div
					style="
						width: 78px;
						height: 78px;
						display: flex;
						align-items: center;
						justify-content: center;
						margin-left: -18px;
						border-radius: 999px;
						border: 4px solid #f6f7f9;
						background: #ffffff;
						overflow: hidden;
						box-sizing: border-box;
						box-shadow: 0 8px 24px rgba(60, 64, 67, 0.12);
					"
				>
					<img
						:src="codexAvatarSrc"
						width="78"
						height="78"
						alt="Codex avatar"
						style="display: flex; width: 100%; height: 100%"
					/>
				</div>
				<div
					style="
						width: 78px;
						height: 78px;
						display: flex;
						align-items: center;
						justify-content: center;
						margin-left: -18px;
						border-radius: 999px;
						border: 4px solid #f6f7f9;
						background: #ffffff;
						overflow: hidden;
						box-sizing: border-box;
						box-shadow: 0 8px 24px rgba(60, 64, 67, 0.12);
					"
				>
					<img
						:src="faviconSrc"
						width="78"
						height="78"
						alt="Gemini avatar"
						style="display: flex; width: 100%; height: 100%"
					/>
				</div>
			</div>
		</section>
	</main>
</template>
