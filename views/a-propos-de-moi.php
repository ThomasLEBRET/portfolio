<?php
  $now = time();
  $birthDate = strtotime('2000-02-03');
  $age  = dateDiff($now, $birthDate);
?>

<section id="a-propos-de-moi">
  <h1 class="title">à propos de moi</h1>
  <hr class="separator">
    <article class="paragraph">
         <p>J'ai <?= $age ?> ans et je suis originaire de la région Indre-et-Loire et j'habite
           actuellement en Ile-de-France à La Forêt Le Roi.
           <br><br>
           J'ai développé une passion pour l'informatique depuis le collège en trouvant par hasard un
           script bash sur un ordinateur du collège et progessivement, je me suis mis à m'intéresser à la
            programmation en essayant de réaliser des choses de plus en plus complexes en fonction des connaissances
            que j'emmagasinais.
           <br><br>

         Ayant développé une soif inextinguible de connaissances en matière de programmation en tout genre que j'ai
         décidé d'en faire mon métier.

         <br>

         En dehors de ma passion pour l'informatique, je joue à un jeu de cartes à collectionner qui s'appelle Yu-Gi-Oh.

         <br>

           Ce jeu de cartes possède énormément de règles assez compliquées à appréhender mais parce que la difficulté de concevoir
           un jeu de cartes efficace existe, je m'y pris de passion.
         </p>
         <a href="#formation"><button type="button" name="btnNext" class="btnNext">Découvrir mes formations</button></a>

    </article>

    <article class="paragraph">
         <p>
           J'ai intégré un filière générale au lycée et j'ai obtenu mon baccalauréat avec option
           Informatique et Sciences du Numérique (ISN) en me spécialisant en sciences de l'ingénieur
           qui avait un côté plus informatique.

           <br><br>

           J'ai ensuite voulu poursuivre à la fac d'Orsay en licence Math-Physique et Informatique afin
           d'obtenir des connaissances plus théoriques en informatique mais les cours magistraux ne m'ayant pas réussi,
           j'ai donc décidé de quitter la fac à la fin du second semestre. J'ai pu intégrer une formation en
           BTS SIO option Solution Logicielles et Applications Métiers au Lycée Parc de Vilgénis à Massy que je prépare
           à l'heure actuelle.
         </p>
         <a href="#competences"><button type="button" name="btnNext" class="btnNext">Découvrir mes compétences</button></a>
    </article>

    <h1 class="center">- Mes qualités -</h1>

    <br>

    <div class="qualites">
        <div class="content">
          <h2>Aidant</h2>
          <img src="/public/img/help.svg" alt="Help">
          <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>

        <div class="content">
          <h2>Autonome</h2>
          <img src="/public/img/route.svg" alt="Help">
          <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>

        <div class="content">
          <h2>Curieux</h2>
          <img src="/public/img/question.svg" alt="Help">
          <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    </div>
</section>