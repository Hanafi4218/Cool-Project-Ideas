const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();

    const inputValues = [
        ...document.getElementsByClassName("values-dropdown")
    ].map((dropdown) => Number(dropdown.value));

    //Applying sorting algorithm:
    // const sortedValues = bubbleSort(inputValues);
    // const sortedValues = selectionSort(inputValues);
    // const sortedValues = insertionSort(inputValues);
    
    //Built-in sorting:
    const sortedValues = inputValues.sort((a, b) => {
        return a - b;
    });
    updateUI(sortedValues);
}

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  })
}

//Bubble Sort:
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
            const temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            }
        }
    }
    return array;
}

//Selection Sort:
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
    return array
}

//Insertion Sort:
const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        const currValue = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > currValue) {
        array[j + 1] = array[j];
        j--;
        }
        array[j + 1] = currValue;
    }
    return array;
}

sortButton.addEventListener("click", sortInputArray);