//- Вывести n-е число с конца односвязного списка, предварительно не узнавая его размер(за 1 цикл while) : )

function findNthFromLast(head, n) {
   let current = head;
   let prev = head;
   let count = 0;

   while (count < n) {
      if (current === null) {
         return null; // список содержит меньше n элементов
      }
      current = current.next;
      count++;
   }

   while (current !== null) {
      current = current.next;
      prev = prev.next;
   }

   return prev.data; // возвращаем данные после перемещения указателей
}
