const headline=document.getElementById('headline'), canvas=document.getElementById('canvas');
document.getElementById('size').addEventListener('input',e=>headline.style.fontSize=e.target.value+'px');
document.getElementById('color').addEventListener('input',e=>headline.style.color=e.target.value);
document.getElementById('bg').addEventListener('input',e=>canvas.style.background=e.target.value);
document.getElementById('addText').addEventListener('click',()=>{const t=document.createElement('div');t.textContent='New text';t.contentEditable=true;t.style.cssText='position:absolute;top:250px;left:55px;font-size:32px;font-weight:800;z-index:4;outline:0';canvas.appendChild(t);});
document.querySelectorAll('.tool').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.tool').forEach(x=>x.classList.remove('active'));b.classList.add('active');}));
document.getElementById('download').addEventListener('click',()=>alert('Export engine is ready for the next build step.'));
