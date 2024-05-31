$(document).ready(function() {
    // 숫자만 입력 받도록 제한
    $('#onlyNumber1, #onlyNumber2, #onlyNumber3').on('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        checkFields(); // 입력할 때마다 체크
    });

    // 성별 및 국적 버튼 클릭 시 active 클래스 추가 및 제거
    $('.gender').click(function() {
        $('.gender').removeClass('active');
        $(this).addClass('active');
        checkFields();
    });

    $('.nation').click(function() {
        $('.nation').removeClass('active');
        $(this).addClass('active');
        checkFields();
    });

    // 모든 필드가 입력되었는지 확인하는 함수
    const checkFields = () => {
        const username = $('#username').val().trim();
        const password = $('#password').val().trim();
        const name = $('#name').val().trim();
        const birth = $('#onlyNumber1').val().trim();
        const idNumber = $('#onlyNumber2').val().trim();
        const genderSelected = $('.gender.active').length > 0;
        const nationSelected = $('.nation.active').length > 0;
        const phone = $('#phone').val();
        const phonePassword = $('#onlyNumber3').val().trim();

        if (username && password && phonePassword) {
            $('#next').addClass('active').prop('disabled', false);
        } else {
            $('#next').removeClass('active').prop('disabled', true);
        }

        if (name && birth && idNumber && genderSelected && nationSelected && phone !== 'none') {
            $('#onlyNumber3').addClass('active').prop('disabled', false);
        } else {
            $('#onlyNumber3').removeClass('active').prop('disabled', true);
        }
    };

    // 입력 필드와 선택된 값이 변경될 때마다 필드 상태를 확인
    $('#username, #password, #name, #onlyNumber1, #onlyNumber2, #phone, #onlyNumber3').on('input change', checkFields);

    // 다음 버튼 클릭 시 페이지 이동
    $('#next').click(function() {
        if (!$(this).prop('disabled')) {
            window.location.href = 'membership3.html';  // 이동할 URL을 이곳에 입력하세요.
        }
    });

    // 초기 버튼 상태 확인
    checkFields();
});