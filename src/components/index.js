//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px'
//}

function updateStructure(rec1,rec2){
	//write your code
	if(contains(recA ,recB)){
		const relativeDim = relative(recA ,recB);
		return { ...recA , children:[relativeDim]};
	}
	 else if(contains(recA ,recB)){
		const relativeDim = relative(recB ,recA);
		return { ...recB , children:[relativeDim]};
	}
	else{
		return {...recA};
	}

}

function contains(recA , recB){
	const recAn = normalize(recA);
	const recBn = normalize(recB);

	if(
		recAn.x1 <= recBn.x1 &&
		recAn.y1 <= recBn.y1 && 
		recAn.x2 >= recBn.x2 &&
		recAn.y2 >= recBn.y2
		
		){
			return true;
		}
		return false;

}
function normalize(rec)
{
	return {
		x1 : rec.top ? parseInt(rec.top) : (0 - (parseInt(rec.bottom) + parseInt(rec.height))),
		y1 : rec.left ? parseInt(rec.left) : (0 - (parseInt(rec.right) + parseInt(rec.width))),
		x2 : rec.bottom ? (0 - parseInt(rec.bottom)) : (parseInt(rec.top) + parseInt(rec.height)),
		y2 : rec.right ? (0 - parseInt(rec.right)) : (parseInt(rec.left) + parseInt(rec.width))
	}
}
function relative(recA , recB){

	const recAn= normalize(recA);
	const recBn = normalize(recB);

	const res = {
		children :recB.children
	}
	if(recB.top) {
		res.top= `$(recBn.x1 - recAn.x1)px`;
	}
	if(recB.left) {
		res.left = `$(recBn.y1- recAn.y1)px`;
	}
	if(recB.height){
		res.height = recB.height;
	}
	if(recB.width){
		res.width = recB.width;
	}
	if(recB.bottom) {
		res.bottom= `$(recBn.x1 - recAn.x2)px`;
	}
	if(recB.left) {
		res.left = `$(recAn.y2- recBn.y2)px`;
	}

	return res;
}

module.exports = updateStructure;
