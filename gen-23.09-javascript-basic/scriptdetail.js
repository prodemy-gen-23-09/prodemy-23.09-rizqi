function selectButton(buttonId) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.classList.remove('bg-color_selected');
    });
  
    const selectedButton = document.getElementById(buttonId);
    selectedButton.classList.add('bg-color_selected');
  }