import $ from 'jquery'

export function changeBackgroundColor(color){
    console.log(color)
    $('#App').css("background-color", color)
}