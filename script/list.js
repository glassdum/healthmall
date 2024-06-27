let list = [
    {
        id: "0001",
        title: "질문입니다.",
        name: "작성자입니다.",
        date: "2024-06-27",
        detail: "해당 내용은 질문 내용입니다.",
    },
    {
        id: "0002",
        title: "질문입니다.",
        name: "작성자입니다.",
        date: "2024-06-27",
        detail: "해당 내용은 질문 내용입니다.",
    },
];

let nextId = 3;

$('#create').click(() => {
    $('.overpage').show();
});

$('#close').click(() => {
    $('#tt').val('');
    $('#id').val('');
    $('#when').val('');
    $('#textarea').val('');

    $('.overpage').hide();
});

$('#detail-close').click(() => {
    $('.detail-overpage').hide();
});

$('#save').click((event) => {
    event.preventDefault();

    const title = $('#tt').val();
    const name = $('#id').val();
    const date = $('#when').val();
    const detail = $('#textarea').val();

    if (!title || !name || !date || !detail) {
        if(!title){
            alert('제목를 입력해주세요.');
            return;
        }else if(!name){
            alert('아이디를 입력해주세요.');
            return;
        }else if(!date){
            alert('날짜를 입력해주세요.');
            return;
        }else{
            alert('내용을 입력해 주세요.');
            return;
        }
    }

    const newItem = {
        id: nextId.toString().padStart(4, '0'),
        title: title,
        name: name,
        date: date,
        detail: detail,
    };

    list.push(newItem);

    nextId++;

    $('#tt').val('');
    $('#id').val('');
    $('#when').val('');
    $('#textarea').val('');

    $('.overpage').hide();

    updateList();
});

function updateList() {
    const listContainer = $('.list ul');
    listContainer.empty();

    const sortedList = [...list].reverse();

    sortedList.forEach(item => {
        const li = $('<li>');
        const a = $('<a>').attr('href', 'javascript:void(0)').text(`${item.title} `).click(() => showDetail(item));
        const span = $('<span>').text(item.date);
        a.append(span);
        li.append(a);
        listContainer.append(li);
    });
}

function showDetail(item) {
    $('#detail-tt').text(item.title);
    $('#detail-id').text(item.name);
    $('#detail-when').text(item.date);
    $('#detail-textarea').text(item.detail);
    $('.detail-overpage').show();
}

$(document).ready(() => {
    updateList();
});





// const closeBtn = document.getElementById("close");
// const makingBtn = document.getElementById("create");
// console.log(makingBtn)
// $(makingBtn).click(function(){
//     $('.overpage').addClass("on");
// })
// $(closeBtn).click(function(){
//     $('.overpage').removeClass("on");
// })