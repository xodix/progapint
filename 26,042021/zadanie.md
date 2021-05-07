# Instrukcje

## Zadanie 1

Napisać aplikację pozwalającą na sprawdzenie, czy dane wejściowe - imię, nazwisko oraz wiek studenta zostały wpisane do pól tekstowych formularza typu input.
Zastosowane metody: metoda alert(); metoda focus()
Przykładowy fragment rozwiązania zadania:
HTML:
Imię

```html
<input type="text" id="imie" name="imie" />
```

Java Script:

```javascript
let imie = document.getElementById("imie");
if (imie.value == "") {
  alert("Wprowadź imię!");
  imie.focus();
}
```

## Zadanie 2

Napisać aplikację pozwalającą na weryfikację rodzaju indeksu posiadanego przez studenta: czy rodzaj indeksu jest stary, czy nowy. Wspomniana weryfikacja polega na sprawdzeniu, czy numer mieści się w zakresie <1, 1000> - co oznacza, że rodzaj indeksu jest stary, czy wyższy od liczby 1000, co znaczy, że jest to wzór nowy.

1. Numer indeksu wprowadzić należy z pola formularza typu input.
2. Walidację przeprowadzić w JS w zakresie sprawdzania:
   - czy pole formularza jest puste?
   - czy wpisana dane są liczbą?
   - czy wpisane dane są liczbą całkowitą?
   - czy wpisane dane należą do zakresu <1, 1000>, czy liczba jest większa od 1000
     Należy obsłużyć stosowne komunikaty błędów w paragrafie poniżej formularza.
3. Podczas wejścia na stronę, należy nadać status "focus" polu wejściowemu input jako reakcję na załadowanie strony
4. Walidacja ma być uruchamiana w momencie kliknięcia na przycisku Wyślij formularza.
5. Zastosuj metodę focus() przy każdym niepowodzeniu walidacji.
6. W przypadku przejścia procedury walidacji numer indeksu ma pojawiać się w paragrafie poniżej formularza.
