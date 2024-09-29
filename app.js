// ! Selecting Elements

let paraRange = document.querySelector("#paraRange");
let paraNum = document.querySelector("#paraNum");
let wordsRange = document.querySelector("#wordsRange");
let wordsNum = document.querySelector("#wordsNum");
let tags = document.querySelector("#tagSelect");
let btn = document.querySelector("#generate");
let include = document.querySelector("#incSelect");
let result = document.querySelector(".output");

// ! Showing the changed value in span

paraRange.addEventListener("input", function () {
  paraNum.innerText = paraRange.value;
});

wordsRange.addEventListener("input", function () {
  wordsNum.innerText = wordsRange.value;
});

// ! Adding list item in Tags list

const tagOptions = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span"];
function opt(el) {
  let select = document.createElement("option");
  tags.append(select);
  select.innerText = `${el}`;
}
tagOptions.forEach(opt);

// /////
function display(text) {
  result.innerHTML = text;
}
// //////

btn.addEventListener("click", mainGenerator);

// ! Button Functioning
function mainGenerator() {
  let paragraph = parseInt(paraRange.value);
  let word = parseInt(wordsRange.value);
  let tag = tags.value;
  let inc = include.value;

  let loremIpsum = generateText(paragraph, word, tag, inc);
  display(loremIpsum);
}

function generateText(paragraph, word, tag, inc) {
  let paraArr = new Array(paragraph).fill("");
  for (let i = 0; i < paragraph; i++) {
    const words = generateWords(word);
    paraArr[i] = inc === "Yes" ? `<${tag}>${words}</${tag}>` : words;
  }
  return paraArr.join("\n");
}

function generateWords(numWords) {
  let lorem = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit non repellat consequatur magnam, dolorem corporis doloremque commodi expedita tempore reprehenderit error vitae inventore atque ipsum, rem id optio minima nam ad recusandae eligendi labore modi aut! Facere sint vero inventore exercitationem accusantium. Quidem possimus alias necessitatibus labore porro consequuntur debitis iure ipsam adipisci? Possimus nobis error dolore delectus sunt officia, eius deserunt fugit quasi dolor accusamus animi recusandae facere. Pariatur cum nisi maiores nam molestias dolorum culpa nobis, fuga quisquam deleniti sit. Commodi, omnis eum reiciendis facere quidem minus, voluptatem doloremque distinctio labore assumenda, non est quis fuga qui? Temporibus libero dolorem odio impedit exercitationem, a, optio doloribus corrupti repudiandae necessitatibus nostrum at illo quia alias maiores vitae nobis saepe itaque, animi commodi odit. Dolorum ab aut quos autem corporis repudiandae, velit, soluta hic, quidem fugiat accusantium et ea beatae labore. Delectus dignissimos labore corporis perspiciatis praesentium provident, aspernatur tempore illo ea ab pariatur rem voluptates soluta accusantium animi facilis inventore eos voluptatibus ratione ut exercitationem vel? Veritatis, quibusdam praesentium laborum facere dolorum maiores commodi unde aspernatur voluptas quisquam inventore architecto? Est assumenda exercitationem maiores illum doloribus provident magnam quo doloremque corporis fugit dolor veniam minima asperiores quaerat unde iure, fuga ullam adipisci aliquam voluptate aut cumque repellendus. Ad nobis numquam asperiores quam sequi. Nihil porro libero qui temporibus exercitationem? Vitae autem cumque dolore officiis veritatis facere beatae enim corrupti! Eligendi praesentium, reprehenderit minima corporis rerum asperiores necessitatibus quis, tempora consequatur atque facilis error hic voluptates minus ut molestiae culpa cupiditate doloribus labore vero harum quo quasi! Totam impedit ex provident? Mollitia repudiandae, excepturi iure, provident nisi quidem maiores similique aspernatur minus accusamus omnis. Nulla ex aut sunt debitis adipisci officia alias sed mollitia! Blanditiis sit iusto assumenda? Sunt hic tempore provident incidunt quia ratione beatae in explicabo laboriosam nulla error voluptas voluptatum illo eligendi inventore ipsam, exercitationem mollitia nemo assumenda sit, amet iure! Quae itaque sequi eligendi sapiente delectus repellendus iste libero, quam sint sit deserunt soluta enim nisi at ex ullam dolor in, obcaecati autem incidunt omnis. Sint, est accusantium, possimus vero pariatur repellendus quo consectetur perspiciatis quam dicta sed. Error accusamus nesciunt delectus neque cupiditate voluptatibus, architecto natus magni aperiam dolorum! Molestiae ex sapiente dicta, velit tenetur sint maxime quo laboriosam sed et, qui debitis maiores, alias doloribus adipisci odio labore totam nostrum quae! Nostrum quia et ad error quae nulla quaerat incidunt doloribus saepe! Ut modi numquam consequatur nobis odit neque ratione impedit velit tempore illo? Reprehenderit eum id excepturi quod architecto cumque maxime! Aliquid nobis maxime quidem error at suscipit soluta neque voluptates labore ipsam? Hic quas explicabo sequi. Id asperiores provident voluptate esse natus. Ratione autem pariatur adipisci veritatis inventore voluptatum modi ad sed earum amet fugiat eveniet temporibus, voluptate distinctio laudantium dignissimos nam sapiente, optio voluptatibus nostrum, eos rem a deleniti? Nam, dicta? Dicta repellat itaque magni necessitatibus id ea officiis, aliquid earum accusamus, natus sit, adipisci sed dolores? Nulla laudantium ab sunt voluptates sit ut soluta exercitationem ratione a. Et, qui dolore culpa perferendis illo hic veritatis optio, esse ea nihil suscipit labore totam soluta illum saepe delectus enim deserunt nemo at sit aliquid velit odit libero in? Qui pariatur ad, itaque officiis ipsa quisquam quaerat corrupti nobis dolores facilis iure eius provident! Laboriosam magnam tempore minus neque quos, qui nesciunt fugiat eius, voluptas reiciendis tempora iure autem ipsum nulla! Veniam rerum sunt illum odit modi! Incidunt impedit iste eos enim qui? Repellat possimus ex, error dignissimos necessitatibus ipsum repudiandae, tempore quasi expedita temporibus fugit accusantium ullam. Architecto, beatae! Placeat explicabo facere amet eum quia repudiandae at sequi illum nesciunt necessitatibus, laboriosam nemo. Culpa odio asperiores voluptates, recusandae accusamus exercitationem sapiente possimus, suscipit vero id eum. Quam, odio, similique distinctio non sed provident minima unde, eveniet molestias eum voluptatum adipisci! Cupiditate, accusamus eligendi? Optio dolore quos alias saepe quam eveniet iusto inventore vel! Ratione, atque in amet nemo expedita eius doloribus, minus sint, velit placeat fugiat sunt odit obcaecati libero eaque incidunt? Aliquid repellat quas veniam asperiores quis harum sapiente, quo sint deserunt ipsam error quia voluptas officia officiis quam illo dolore iste corrupti consequuntur necessitatibus dolor non sit odit fuga? Illum alias perferendis aliquid molestias quasi itaque vel voluptas aut mollitia ipsum. Ipsa perspiciatis, distinctio sapiente minus ab nostrum odio temporibus provident veritatis quasi, molestiae incidunt dolor eos! Repellat porro atque, quisquam laboriosam perspiciatis sint praesentium adipisci maxime exercitationem quos amet ut incidunt quia numquam architecto est deleniti inventore accusamus modi ducimus quae excepturi nobis. Voluptatum nam dolor similique omnis exercitationem! Minus sequi, ducimus dolores vitae fuga hic inventore et cum sint ea culpa, perspiciatis aut dignissimos modi! Eligendi corrupti quasi recusandae ab, repellendus accusantium! Sapiente ullam veniam, eveniet reiciendis vitae facilis non cum voluptas totam eos nobis optio possimus. Iste laborum vero quo earum quos! Minus ipsa quidem recusandae facere aspernatur odit non nisi. Dolores minima dignissimos, consequuntur, sequi repudiandae, explicabo ut nam nostrum reiciendis eos neque sunt eveniet numquam. Eaque dolorem error enim, placeat consequuntur aliquid architecto necessitatibus illum accusantium magni libero. Ea eligendi libero incidunt qui. Enim ipsa quis ab, suscipit vero reprehenderit? Dignissimos, odio quo. Delectus ea, nisi corporis excepturi fuga voluptate voluptatum obcaecati dolores laborum. Vero mollitia ipsum excepturi sed soluta, reprehenderit nobis! Fuga excepturi vel inventore itaque ea quas cupiditate minus tempora! Quia, sunt. Reprehenderit temporibus magnam molestiae praesentium doloribus sunt molestias sequi delectus hic ullam commodi cum sit maiores nemo autem nostrum nobis neque aspernatur repellendus, error enim sapiente officia qui? Aperiam quos consequatur accusamus eligendi veritatis, esse impedit? Voluptatibus neque perspiciatis saepe facilis recusandae molestiae dolorem inventore architecto aliquam ab nulla, id repellat ratione, animi, incidunt adipisci impedit consequuntur similique cupiditate earum commodi corrupti. Doloremque minus nobis quidem autem illum at a in asperiores enim beatae. Quae omnis unde adipisci nesciunt totam aliquid fugiat. Maxime tempora doloremque iure id aliquid voluptatem quia itaque harum rem quos commodi corrupti, laboriosam deleniti dicta similique modi ea assumenda debitis fugit placeat velit enim porro. Necessitatibus quidem perferendis doloremque delectus architecto in velit animi quia dignissimos. Deleniti.`;
  let words = lorem.split(" ");
  if (numWords <= words.length) {
    return words.slice(0, numWords).join(" ");
  } else {
    return words.join(" ");
  }
}
