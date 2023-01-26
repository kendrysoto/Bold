import { css } from 'styled-components';

export const wrapperContainer = css`
	width: 100%;
	margin: 0 auto;
	@media screen and (min-width: 768px) {
		max-width: 700px;
		margin: 0 auto;
	}
	@media screen and (min-width: 960px) {
		max-width: 800px;
		margin: 0 auto;
	}
	@media screen and (min-width: 1024px) {
		max-width: 900px;
		margin: 0 auto;
	}
	@media screen and (min-width: 1200px) {
		max-width: 1100px;
		margin: 0 auto;
	}
`;
