# Edycja wiki Cieni Przeszłości

- Zachowuj treść i sens opisów zadań. Nie dopisuj niezweryfikowanych informacji o grze.
- Tytuły rozdziałów są w front matter. Zadania mają H2, a zadania i etapy kopaczy pod właściwą ścieżką zakończenia — H3. Każdy nagłówek ma unikalne {#id}.
- Warianty kopaczy zawierają nazwę ścieżki w tytule, aby odróżnić wyniki wyszukiwania. Nie mieszaj wymagań dwóch zakończeń.
- Instrukcje i warunki pozostają akapitami lub listami. Zachowuj wszystkie warianty i liczby. Nazwa „Viande tendre de la rat-taupe” pochodzi z dostarczonej solucji; nie zgaduj nazwy z polskiego dziennika.
- Zwykłe dokumenty zapisuj w .md. Strona główna używa .mdx dla komponentów nagłówka i nawigacji.
- Nie zamieniaj końcowych spacji na ukośniki. Listy numerowane zapisuj jako prawdziwe listy Markdown.
- Autorzy są na stronie głównej. Materiał źródłowy dodaje szablon. Wszystkie zewnętrzne linki otwierają nową kartę.
- Przed zakończeniem uruchom pnpm check. Git oraz publikację wykonuje właściciel.

## Wspólny układ menu i wyróżnień

- Menu: Strona główna, Solucja i pozostałe działy z zadaniami, na końcu Informacje dodatkowe (konfiguracja, porady, teleporty, mapy i spisy). Nie twórz pustej kategorii i zachowuj rozwijane lokacje rozdziałów.
- Ostrzeżenia: `:::warning Uwaga`; porady: `:::tip Wskazówka`; warunki i fakty: `:::info Informacja`. Dobieraj rodzaj po znaczeniu, nie tylko po dawnej etykiecie. Krytyczną blokadę gry można oznaczyć `:::danger Uwaga`.
- Po otwarciu i przed zamknięciem ramki `:::` zostaw pusty wiersz. Nie powtarzaj tytułu jako „UWAGA:” w treści. Zachowuj listy, warianty, liczby i powiązane media; nie obejmuj uwagą dalszego opisu zadania.
- Cytaty `>` służą autentycznym wypowiedziom lub listom z gry. Nie używaj ich do wyróżniania instrukcji autora, nagród ani opisów strony. Ramki działają również w zwykłych `.md` i nie wymagają MDX.
- README repozytorium i strona główna używają wspólnej sekcji „Jak edytować wiki” z bazy. Instrukcja edycji jest jednakowa we wszystkich wiki; nazwa, adres, materiały i autorzy dotyczą danego moda. Zachowuj zgodne osoby i role w obu sekcjach „Autorzy”; nie kopiuj autorstwa z przykładowego NB.
- Nagłówek strony głównej pokazuje heroDescription z site-profile.js: jedno zdanie o fabule lub charakterze danego moda na podstawie jego opisu na Sefaris. Zachowuj wspólny komponent HomeHeader i styl opisu; nie przenoś opisu innego moda ani autorstwa do nagłówka.

- Spis „Na tej stronie” używa wspólnego `src/theme/TOCItems/`: po dojściu do końca przewijanej strony zaznacza ostatnią sekcję, a przy przewijaniu w górę wraca do pozycji czytania. Zachowuj identyczny mechanizm w bazie i wiki; test regresji jest częścią `pnpm check`.
