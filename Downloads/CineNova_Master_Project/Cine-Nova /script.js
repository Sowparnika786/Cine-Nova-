const movies = [
  {id:1,title:"Beyond The Horizon",year:2026,rating:9.1,duration:"2h 31m",genre:"Sci-Fi",language:"English",age:"13+",mood:"Mind-Bending",poster:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=85",backdrop:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1800&q=90",description:"Humanity launches its most ambitious mission beyond the known universe, searching for a future among distant stars.",director:"Ava Stone",writer:"Mira Cole",cast:["Lena Park","Noah Reed","Maya Singh"],trailer:"https://www.youtube.com/embed/zSWdZVtXT7E"},
  {id:2,title:"Shadow Protocol",year:2025,rating:8.8,duration:"2h 10m",genre:"Thriller",language:"English",age:"16+",mood:"Exciting",poster:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=85",backdrop:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=90",description:"A former intelligence officer uncovers a global conspiracy hidden inside an abandoned surveillance program.",director:"Ethan Vale",writer:"Jon Mercer",cast:["Alex Grant","Iris Cole","Dev Malik"],trailer:"https://www.youtube.com/embed/EXeTwQWrcwY"},
  {id:3,title:"Neon City",year:2026,rating:8.6,duration:"2h 02m",genre:"Action",language:"English",age:"13+",mood:"Exciting",poster:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85",backdrop:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=90",description:"A rogue courier races through a futuristic city while carrying information that could change the world.",director:"Rae Morgan",writer:"Kian Holt",cast:["Nia Brooks","Arjun Ray","Leo Hart"],trailer:"https://www.youtube.com/embed/6ZfuNTqbHE8"},
  {id:4,title:"The Last Signal",year:2024,rating:8.4,duration:"1h 57m",genre:"Sci-Fi",language:"English",age:"13+",mood:"Mind-Bending",poster:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=700&q=85",backdrop:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1800&q=90",description:"Scientists receive a mysterious transmission from deep space and uncover a message never meant for humanity.",director:"Mina Torres",writer:"Lee Warren",cast:["Anika Rao","Tom Reyes","Sofia Lin"],trailer:"https://www.youtube.com/embed/YoHD9XEInc0"},
  {id:5,title:"Golden Silence",year:2023,rating:8.2,duration:"2h 14m",genre:"Drama",language:"English",age:"U/A",mood:"Emotional",poster:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85",backdrop:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=90",description:"A powerful story of family, ambition and redemption set against a breathtaking landscape.",director:"Maya Hart",writer:"Jonah Vale",cast:["Riya Sen","Elena Moss","David King"],trailer:"https://www.youtube.com/embed/8ugaeA-nMTc"},
  {id:6,title:"Midnight Run",year:2025,rating:8.5,duration:"1h 54m",genre:"Action",language:"Hindi",age:"16+",mood:"Exciting",poster:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=85",backdrop:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=90",description:"A professional driver has one night to escape the city after becoming the target of a dangerous syndicate.",director:"Arav Menon",writer:"Kabir Das",cast:["Rohan Mehta","Meera Nair","Vikram Dev"],trailer:"https://www.youtube.com/embed/2LqzF5WauAw"},
  {id:7,title:"Dream Layers",year:2022,rating:8.9,duration:"2h 28m",genre:"Sci-Fi",language:"English",age:"13+",mood:"Mind-Bending",poster:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=85",backdrop:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=90",description:"A group of specialists explores interconnected dream worlds where reality becomes increasingly uncertain.",director:"Nolan Reed",writer:"Mara Quinn",cast:["Eva Moon","Noah Cross","Liam West"],trailer:"https://www.youtube.com/embed/YoHD9XEInc0"},
  {id:8,title:"After Rain",year:2024,rating:8.0,duration:"1h 49m",genre:"Drama",language:"Tamil",age:"U/A",mood:"Emotional",poster:"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=85",backdrop:"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1800&q=90",description:"Two strangers meet during a storm and discover how one unexpected conversation can change their lives.",director:"Kavin Raj",writer:"Nila Arun",cast:["Asha Ravi","Vijay Arun","Priya K"],trailer:"https://www.youtube.com/embed/6ZfuNTqbHE8"},
  {id:9,title:"Zero Hour",year:2026,rating:8.7,duration:"2h 18m",genre:"Thriller",language:"English",age:"16+",mood:"Exciting",poster:"https://images.unsplash.com/photo-1485095329183-d0797cdc5676?auto=format&fit=crop&w=700&q=85",backdrop:"https://images.unsplash.com/photo-1485095329183-d0797cdc5676?auto=format&fit=crop&w=1800&q=90",description:"A countdown begins when a security expert discovers a threat hidden beneath a major metropolitan city.",director:"Ivy Lane",writer:"Chris North",cast:["Milo Grant","Zoe Reed","Kara Jones"],trailer:"https://www.youtube.com/embed/EXeTwQWrcwY"},
  {id:10,title:"Pixel World",year:2023,rating:7.9,duration:"1h 44m",genre:"Animation",language:"English",age:"U",mood:"Funny",poster:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=85",backdrop:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=90",description:"A young gamer becomes trapped inside a digital universe and must save its inhabitants from destruction.",director:"Tara Wells",writer:"Ben Cole",cast:["Pip","Nova","Byte"],trailer:"https://www.youtube.com/embed/8ugaeA-nMTc"},
  {id:11,title:"Weekend Theory",year:2025,rating:7.8,duration:"1h 41m",genre:"Comedy",language:"English",age:"U/A",mood:"Funny",poster:"https://images.unsplash.com/photo-1485095329183-d0797cdc5676?auto=format&fit=crop&w=700&q=85",backdrop:"https://images.unsplash.com/photo-1485095329183-d0797cdc5676?auto=format&fit=crop&w=1800&q=90",description:"Four friends plan the perfect weekend getaway, only to discover that absolutely nothing goes according to plan.",director:"Sam Gold",writer:"Ari Finn",cast:["Mia Day","Ben West","Kai Reed"],trailer:"https://www.youtube.com/embed/2LqzF5WauAw"},
  {id:12,title:"Nova",year:2026,rating:9.0,duration:"2h 25m",genre:"Sci-Fi",language:"English",age:"13+",mood:"Inspiring",poster:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85",backdrop:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=90",description:"An astronaut awakens near a dying star and must uncover what happened to the rest of her crew.",director:"Leah Stone",writer:"Nico Vale",cast:["Sana Rey","Luke Hart","Mina Cole"],trailer:"https://www.youtube.com/embed/zSWdZVtXT7E"},
  {id:13,title:"Blackout",year:2024,rating:8.1,duration:"1h 56m",genre:"Thriller",language:"Malayalam",age:"16+",mood:"Exciting",poster:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85",backdrop:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=90",description:"When an entire city loses power, a journalist discovers that the blackout was deliberately engineered.",director:"Naveen Paul",writer:"Joel Mathew",cast:["Akhil S","Rina Paul","Dev Jose"],trailer:"https://www.youtube.com/embed/6ZfuNTqbHE8"},
  {id:14,title:"Velocity",year:2025,rating:8.3,duration:"2h 06m",genre:"Action",language:"English",age:"13+",mood:"Exciting",poster:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85",backdrop:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=90",description:"An elite racer is pulled into an underground competition where losing means far more than surrendering a trophy.",director:"Jade Moss",writer:"R. Hunter",cast:["Kai Moss","Eli Rae","Nora V"],trailer:"https://www.youtube.com/embed/EXeTwQWrcwY"},
  {id:15,title:"Little Galaxy",year:2024,rating:8.4,duration:"1h 38m",genre:"Animation",language:"English",age:"U",mood:"Inspiring",poster:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=85",backdrop:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1800&q=90",description:"A curious child discovers a tiny living galaxy hidden inside an ancient telescope.",director:"June Park",writer:"Milo West",cast:["Lumi","Orbit","Comet"],trailer:"https://www.youtube.com/embed/8ugaeA-nMTc"},
  {id:16,title:"Office Chaos",year:2026,rating:7.7,duration:"1h 43m",genre:"Comedy",language:"English",age:"U/A",mood:"Funny",poster:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=85",backdrop:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=90",description:"A normal Monday becomes unforgettable when a company's entire management team disappears before an important presentation.",director:"Leo Finn",writer:"Tara Moss",cast:["Chris Bell","Nina Cole","Sam Reed"],trailer:"https://www.youtube.com/embed/2LqzF5WauAw"},
  {id:17,title:"Quiet Shores",year:2025,rating:8.2,duration:"1h 46m",genre:"Drama",language:"Tamil",age:"U",mood:"Relaxing",poster:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85",backdrop:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=90",description:"A photographer returns to a seaside town and rediscovers the life she left behind.",director:"Madhan V",writer:"Rhea M",cast:["Keerthi","Arun","Megha"],trailer:"https://www.youtube.com/embed/zSWdZVtXT7E"},
  {id:18,title:"Rise Again",year:2026,rating:8.6,duration:"2h 03m",genre:"Drama",language:"Hindi",age:"U/A",mood:"Inspiring",poster:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85",backdrop:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=90",description:"After a devastating setback, a young athlete rebuilds her life one impossible step at a time.",director:"Anaya Kapoor",writer:"Rish Malhotra",cast:["Isha Verma","Kabir Mehta","Dev Rana"],trailer:"https://www.youtube.com/embed/6ZfuNTqbHE8"}
];

const state = {
  favorites: JSON.parse(localStorage.getItem("cn_favorites") || "[]"),
  watchlist: JSON.parse(localStorage.getItem("cn_watchlist") || "[]"),
  recentlyViewed: JSON.parse(localStorage.getItem("cn_recent") || "[]"),
  progress: JSON.parse(localStorage.getItem("cn_progress") || "{}"),
  ratings: JSON.parse(localStorage.getItem("cn_ratings") || "{}"),
  reactions: JSON.parse(localStorage.getItem("cn_reactions") || "{}"),
  reviews: JSON.parse(localStorage.getItem("cn_reviews") || "{}"),
  profiles: JSON.parse(localStorage.getItem("cn_profiles") || '[{"id":1,"name":"Ariana","avatar":"🌌"},{"id":2,"name":"Cinema","avatar":"🎬"},{"id":3,"name":"Explorer","avatar":"🚀"}]'),
  currentProfile: JSON.parse(localStorage.getItem("cn_currentProfile") || "null"),
  authUser: JSON.parse(localStorage.getItem("cn_authUser") || "null"),
  themeIndex: Number(localStorage.getItem("cn_themeIndex") || 0),
  activeGenre: "All",
  activeMood: null,
  heroIndex: 0,
  heroTimer: null,
  currentMovieId: null
};

const $ = id => document.getElementById(id);
const qsa = sel => [...document.querySelectorAll(sel)];

function saveState(){
  localStorage.setItem("cn_favorites", JSON.stringify(state.favorites));
  localStorage.setItem("cn_watchlist", JSON.stringify(state.watchlist));
  localStorage.setItem("cn_recent", JSON.stringify(state.recentlyViewed));
  localStorage.setItem("cn_progress", JSON.stringify(state.progress));
  localStorage.setItem("cn_ratings", JSON.stringify(state.ratings));
  localStorage.setItem("cn_reactions", JSON.stringify(state.reactions));
  localStorage.setItem("cn_reviews", JSON.stringify(state.reviews));
  localStorage.setItem("cn_profiles", JSON.stringify(state.profiles));
  localStorage.setItem("cn_currentProfile", JSON.stringify(state.currentProfile));
  localStorage.setItem("cn_authUser", JSON.stringify(state.authUser));
  localStorage.setItem("cn_themeIndex", String(state.themeIndex));
}

function toast(message, type="success"){
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  el.textContent = message;
  $("toastContainer").appendChild(el);
  setTimeout(()=>el.remove(), 2800);
}

function durationToMinutes(text){
  const h = Number((text.match(/(\d+)h/)||[])[1]||0);
  const m = Number((text.match(/(\d+)m/)||[])[1]||0);
  return h*60+m;
}

function initialize(){
  applyTheme();
  bindAuth();
  bindGlobalEvents();
  renderProfiles();

  setTimeout(()=>{
    $("splashScreen").classList.add("hidden");
    if(!state.authUser) $("authScreen").classList.remove("hidden");
    else if(!state.currentProfile) $("profileScreen").classList.remove("hidden");
    else launchApp();
  }, 2300);
}

function bindAuth(){
  qsa(".auth-tab").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      qsa(".auth-tab").forEach(x=>x.classList.remove("active"));
      btn.classList.add("active");
      const login = btn.dataset.tab === "login";
      $("loginForm").classList.toggle("hidden", !login);
      $("signupForm").classList.toggle("hidden", login);
    });
  });

  $("signupForm").addEventListener("submit", e=>{
    e.preventDefault();
    state.authUser = {name:$("signupName").value.trim(), email:$("signupEmail").value.trim()};
    saveState();
    $("authScreen").classList.add("hidden");
    $("profileScreen").classList.remove("hidden");
    toast("Account created");
  });

  $("loginForm").addEventListener("submit", e=>{
    e.preventDefault();
    state.authUser = {name:"User", email:$("loginEmail").value.trim()};
    saveState();
    $("authScreen").classList.add("hidden");
    $("profileScreen").classList.remove("hidden");
    toast("Welcome back");
  });

  $("demoLogin").addEventListener("click", ()=>{
    state.authUser = {name:"Demo User", email:"demo@cinenova.local"};
    saveState();
    $("authScreen").classList.add("hidden");
    $("profileScreen").classList.remove("hidden");
  });
}

function renderProfiles(){
  $("profileGrid").innerHTML = state.profiles.map(p=>`
    <button class="profile-card" onclick="chooseProfile(${p.id})">
      <div class="profile-avatar">${p.avatar}</div>
      <span>${p.name}</span>
    </button>
  `).join("");
}

window.chooseProfile = function(id){
  state.currentProfile = state.profiles.find(p=>p.id===id);
  saveState();
  $("profileScreen").classList.add("hidden");
  launchApp();
};

function launchApp(){
  $("app").classList.remove("hidden");
  $("authScreen").classList.add("hidden");
  $("profileScreen").classList.add("hidden");
  $("profileMenuBtn").textContent = state.currentProfile?.avatar || "A";
  $("currentProfileName").textContent = state.currentProfile?.name || "Guest";

  renderHero();
  startHeroRotation();
  renderGenresAndFilters();
  renderAllSections();
}

function renderHero(){
  const featured = [movies[0],movies[11],movies[17],movies[2]];
  const movie = featured[state.heroIndex % featured.length];
  $("heroBackground").style.backgroundImage = `url("${movie.backdrop}")`;
  const parts = movie.title.split(" ");
  $("heroTitle").innerHTML = parts.length > 1 ? `${parts.slice(0,-1).join(" ")} <span>${parts.at(-1)}</span>` : `<span>${movie.title}</span>`;
  $("heroYear").textContent = movie.year;
  $("heroRating").textContent = movie.rating;
  $("heroDuration").textContent = movie.duration;
  $("heroGenre").textContent = movie.genre;
  $("heroAge").textContent = movie.age;
  $("heroDescription").textContent = movie.description;
  $("heroDetailsBtn").onclick = ()=>showMovieDetails(movie.id);
  $("heroTrailerBtn").onclick = ()=>openTrailer(movie.id);
  $("heroWatchlistBtn").onclick = ()=>toggleWatchlist(movie.id);

  $("heroDots").innerHTML = featured.map((_,i)=>`<button class="hero-dot ${i===state.heroIndex?"active":""}" onclick="setHero(${i})"></button>`).join("");
}

window.setHero = function(index){
  state.heroIndex = index;
  renderHero();
};

function startHeroRotation(){
  clearInterval(state.heroTimer);
  state.heroTimer = setInterval(()=>{
    state.heroIndex = (state.heroIndex+1)%4;
    renderHero();
  }, 6500);
}

function renderGenresAndFilters(){
  const genres = ["All", ...new Set(movies.map(m=>m.genre))];
  $("genreRow").innerHTML = genres.map(g=>`<button class="genre-btn ${g==="All"?"active":""}" data-genre="${g}">${g}</button>`).join("");
  qsa(".genre-btn").forEach(btn=>btn.addEventListener("click", ()=>{
    state.activeGenre = btn.dataset.genre;
    qsa(".genre-btn").forEach(x=>x.classList.toggle("active",x===btn));
    filterMovies();
  }));

  const languages = [...new Set(movies.map(m=>m.language))];
  $("languageFilter").innerHTML += languages.map(x=>`<option value="${x}">${x}</option>`).join("");
  const years = [...new Set(movies.map(m=>m.year))].sort((a,b)=>b-a);
  $("yearFilter").innerHTML += years.map(x=>`<option value="${x}">${x}</option>`).join("");
}

function createMovieCard(movie){
  const fav = state.favorites.includes(movie.id);
  const watch = state.watchlist.includes(movie.id);
  return `
    <article class="movie-card">
      <div class="poster">
        <img src="${movie.poster}" alt="${movie.title}">
        <div class="movie-actions">
          <button class="action-btn ${fav?"active":""}" onclick="event.stopPropagation();toggleFavorite(${movie.id})" title="Favorite"><i class="${fav?"fa-solid":"fa-regular"} fa-heart"></i></button>
          <button class="action-btn ${watch?"active":""}" onclick="event.stopPropagation();toggleWatchlist(${movie.id})" title="Watchlist"><i class="${watch?"fa-solid":"fa-regular"} fa-bookmark"></i></button>
        </div>
        <div class="play-overlay" onclick="showMovieDetails(${movie.id})">
          <button class="play-circle"><i class="fa-solid fa-play"></i></button>
        </div>
      </div>
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <div class="movie-meta"><span>${movie.year}</span><span class="rating"><i class="fa-solid fa-star"></i> ${movie.rating}</span></div>
        <span class="genre-text">${movie.genre} • ${movie.duration} • ${movie.language}</span>
      </div>
    </article>`;
}

function renderAllSections(){
  filterMovies();
  renderTrending();
  renderTop10();
  renderNewReleases();
  renderRecommendations();
  renderFavorites();
  renderWatchlist();
  renderRecentlyViewed();
  renderContinueWatching();
  renderMoodResults();
}

function filterMovies(){
  const query = $("searchInput").value.trim().toLowerCase();
  const lang = $("languageFilter").value;
  const year = $("yearFilter").value;
  const minRating = Number($("ratingFilter").value);
  let result = movies.filter(m=>{
    const hay = `${m.title} ${m.genre} ${m.language} ${m.cast.join(" ")} ${m.director}`.toLowerCase();
    return hay.includes(query) &&
      (state.activeGenre==="All" || m.genre===state.activeGenre) &&
      (lang==="All" || m.language===lang) &&
      (year==="All" || String(m.year)===year) &&
      m.rating>=minRating;
  });

  const sort = $("sortMovies").value;
  if(sort==="rating") result.sort((a,b)=>b.rating-a.rating);
  if(sort==="newest") result.sort((a,b)=>b.year-a.year);
  if(sort==="oldest") result.sort((a,b)=>a.year-b.year);
  if(sort==="name") result.sort((a,b)=>a.title.localeCompare(b.title));
  if(sort==="duration") result.sort((a,b)=>durationToMinutes(a.duration)-durationToMinutes(b.duration));

  $("movieCount").textContent = `${result.length} movies`;
  $("movieGrid").innerHTML = result.length ? result.map(createMovieCard).join("") : emptyState("No movies found","Try changing the search or filters.");
}

function emptyState(title,text){
  return `<div class="empty-state"><i class="fa-solid fa-film"></i><h3>${title}</h3><p>${text}</p></div>`;
}

function renderTrending(){
  $("trendingSlider").innerHTML = [...movies].sort((a,b)=>b.rating-a.rating).slice(0,8).map(m=>`
    <div class="horizontal-card" onclick="showMovieDetails(${m.id})">
      <img src="${m.poster}" alt="${m.title}">
      <h3>${m.title}</h3><span>${m.genre} • ⭐ ${m.rating}</span>
    </div>`).join("");
}

function renderTop10(){
  $("top10Slider").innerHTML = [...movies].sort((a,b)=>b.rating-a.rating).slice(0,10).map((m,i)=>`
    <div class="top10-card" onclick="showMovieDetails(${m.id})">
      <span class="top10-rank">${i+1}</span>
      <img src="${m.poster}" alt="${m.title}">
    </div>`).join("");
}

function renderNewReleases(){
  $("newReleaseSlider").innerHTML = [...movies].sort((a,b)=>b.year-a.year || b.rating-a.rating).slice(0,8).map(m=>`
    <div class="horizontal-card" onclick="showMovieDetails(${m.id})">
      <img src="${m.poster}" alt="${m.title}">
      <h3>${m.title}</h3><span>${m.year} • ${m.genre}</span>
    </div>`).join("");
}

function renderRecommendations(){
  const liked = Object.entries(state.reactions).filter(([_,v])=>v==="like").map(([id])=>movies.find(m=>m.id===Number(id))).filter(Boolean);
  const viewed = state.recentlyViewed.map(id=>movies.find(m=>m.id===id)).filter(Boolean);
  const favorites = state.favorites.map(id=>movies.find(m=>m.id===id)).filter(Boolean);
  const source = [...liked,...favorites,...viewed];
  let reason = "Popular picks based on your activity";
  let preferredGenre = null;

  if(source.length){
    const counts = {};
    source.forEach(m=>counts[m.genre]=(counts[m.genre]||0)+1);
    preferredGenre = Object.entries(counts).sort((a,b)=>b[1]-a[1])[0][0];
    reason = `Because you like ${preferredGenre}`;
  }

  let picks = movies.filter(m=>!state.recentlyViewed.includes(m.id) && (!preferredGenre || m.genre===preferredGenre));
  if(picks.length<6) picks = [...picks,...movies.filter(m=>!picks.includes(m))];
  $("recommendationReason").textContent = reason;
  $("recommendationGrid").innerHTML = picks.slice(0,8).map(createMovieCard).join("");
}

function renderFavorites(){
  const list = movies.filter(m=>state.favorites.includes(m.id));
  $("favoritesGrid").innerHTML = list.length ? list.map(createMovieCard).join("") : emptyState("No favorites yet","Tap the heart icon on movies you love.");
}

function renderWatchlist(){
  const list = movies.filter(m=>state.watchlist.includes(m.id));
  $("watchlistGrid").innerHTML = list.length ? list.map(createMovieCard).join("") : emptyState("Your watchlist is empty","Add movies you want to watch later.");
}

function renderRecentlyViewed(){
  const list = state.recentlyViewed.map(id=>movies.find(m=>m.id===id)).filter(Boolean);
  $("recentlyViewedGrid").innerHTML = list.length ? list.map(createMovieCard).join("") : emptyState("Nothing viewed yet","Open a movie and it will appear here.");
}

function renderContinueWatching(){
  const entries = Object.entries(state.progress).filter(([_,p])=>p>0 && p<100).sort((a,b)=>b[1]-a[1]);
  if(!entries.length){
    $("continueGrid").innerHTML = emptyState("Nothing in progress","Open a movie and adjust its progress slider.");
    return;
  }
  $("continueGrid").innerHTML = entries.map(([id,p])=>{
    const m = movies.find(x=>x.id===Number(id));
    if(!m) return "";
    return `<div class="continue-card" onclick="showMovieDetails(${m.id})">
      <img src="${m.backdrop}" alt="${m.title}">
      <div class="continue-info"><div><strong>${m.title}</strong><span>${p}%</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${p}%"></div></div></div>
    </div>`;
  }).join("");
}

function renderMoodResults(){
  if(!state.activeMood){ $("moodResults").innerHTML=""; return; }
  const list = movies.filter(m=>m.mood===state.activeMood);
  $("moodResults").innerHTML = list.map(createMovieCard).join("");
}

window.toggleFavorite = function(id){
  state.favorites = state.favorites.includes(id) ? state.favorites.filter(x=>x!==id) : [...state.favorites,id];
  saveState(); renderAllSections(); refreshModalButtons();
  toast(state.favorites.includes(id) ? "Added to Favorites" : "Removed from Favorites");
};

window.toggleWatchlist = function(id){
  state.watchlist = state.watchlist.includes(id) ? state.watchlist.filter(x=>x!==id) : [...state.watchlist,id];
  saveState(); renderAllSections(); refreshModalButtons();
  toast(state.watchlist.includes(id) ? "Added to Watchlist" : "Removed from Watchlist");
};

window.showMovieDetails = function(id){
  const m = movies.find(x=>x.id===id); if(!m) return;
  state.currentMovieId = id;
  state.recentlyViewed = [id, ...state.recentlyViewed.filter(x=>x!==id)].slice(0,10);
  saveState();

  $("modalBackdrop").style.backgroundImage = `url("${m.backdrop}")`;
  $("modalPoster").src = m.poster;
  $("modalTitle").textContent = m.title;
  $("modalGenre").textContent = m.genre;
  $("modalYear").textContent = m.year;
  $("modalRating").textContent = m.rating;
  $("modalDuration").textContent = m.duration;
  $("modalLanguage").textContent = m.language;
  $("modalAge").textContent = m.age;
  $("modalDescription").textContent = m.description;
  $("modalDirector").textContent = m.director;
  $("modalWriter").textContent = m.writer;
  $("castRow").innerHTML = m.cast.map(name=>`<div class="cast-chip"><span class="cast-avatar">${name[0]}</span>${name}</div>`).join("");
  $("modalTrailerBtn").onclick = ()=>openTrailer(m.id);
  $("modalShareBtn").onclick = ()=>shareMovie(m);
  $("progressSlider").value = state.progress[id] || 0;
  $("progressLabel").textContent = `${state.progress[id] || 0}%`;
  refreshModalButtons();
  renderStars(id);
  renderSimilar(m);
  renderReviews(id);

  $("movieModal").classList.add("active");
  document.body.style.overflow="hidden";
  renderAllSections();
};

function refreshModalButtons(){
  const id = state.currentMovieId; if(!id) return;
  const fav = state.favorites.includes(id), watch = state.watchlist.includes(id);
  $("modalFavoriteBtn").innerHTML = `<i class="${fav?"fa-solid":"fa-regular"} fa-heart"></i> ${fav?"Remove Favorite":"Favorite"}`;
  $("modalWatchlistBtn").innerHTML = `<i class="${watch?"fa-solid":"fa-regular"} fa-bookmark"></i> ${watch?"Remove Watchlist":"My List"}`;
  $("modalFavoriteBtn").onclick = ()=>toggleFavorite(id);
  $("modalWatchlistBtn").onclick = ()=>toggleWatchlist(id);

  const reaction = state.reactions[id];
  $("modalLikeBtn").classList.toggle("active", reaction==="like");
  $("modalDislikeBtn").classList.toggle("active", reaction==="dislike");
  $("modalLikeBtn").onclick = ()=>setReaction(id,"like");
  $("modalDislikeBtn").onclick = ()=>setReaction(id,"dislike");
}

function setReaction(id,type){
  state.reactions[id] = state.reactions[id]===type ? null : type;
  saveState(); refreshModalButtons(); renderRecommendations();
  toast(type==="like" ? "Preference saved" : "Feedback saved");
}

function renderStars(id){
  const current = state.ratings[id] || 0;
  $("starRating").innerHTML = [1,2,3,4,5].map(n=>`<button class="${n<=current?"active":""}" onclick="rateMovie(${id},${n})"><i class="fa-solid fa-star"></i></button>`).join("");
}
window.rateMovie = function(id,n){ state.ratings[id]=n; saveState(); renderStars(id); toast(`Rated ${n}/5`); };

function renderSimilar(movie){
  const list = movies.filter(m=>m.id!==movie.id && (m.genre===movie.genre || m.mood===movie.mood)).slice(0,6);
  $("similarMovies").innerHTML = list.map(m=>`<div class="mini-movie" onclick="showMovieDetails(${m.id})"><img src="${m.poster}" alt="${m.title}"><span>${m.title}</span></div>`).join("");
}

function renderReviews(id){
  const defaults = [{name:"CineNova User",text:"Beautiful visuals and a strong atmosphere."}];
  const list = [...defaults, ...(state.reviews[id]||[])];
  $("reviewsList").innerHTML = list.map(r=>`<div class="review-item"><strong>${r.name}</strong><p>${r.text}</p></div>`).join("");
}

window.closeMovieModal = function(){
  $("movieModal").classList.remove("active");
  document.body.style.overflow="";
};

window.openTrailer = function(id){
  const m = movies.find(x=>x.id===id); if(!m) return;
  $("trailerFrame").src = `${m.trailer}?autoplay=1`;
  $("trailerModal").classList.add("active");
};
window.closeTrailerModal = function(){
  $("trailerFrame").src="";
  $("trailerModal").classList.remove("active");
};

function shareMovie(movie){
  const text = `Check out ${movie.title} on CineNova`;
  if(navigator.share) navigator.share({title:movie.title,text}).catch(()=>{});
  else navigator.clipboard?.writeText(text).then(()=>toast("Movie info copied"));
}

function bindGlobalEvents(){
  ["sortMovies","languageFilter","yearFilter","ratingFilter"].forEach(id=>$(id).addEventListener("change",filterMovies));

  $("searchInput").addEventListener("input", ()=>{
    filterMovies();
    const q = $("searchInput").value.trim().toLowerCase();
    if(!q){ $("searchSuggestions").classList.add("hidden"); return; }
    const results = movies.filter(m=>`${m.title} ${m.genre} ${m.cast.join(" ")}`.toLowerCase().includes(q)).slice(0,5);
    $("searchSuggestions").innerHTML = results.map(m=>`
      <div class="search-suggestion" onclick="selectSearchResult(${m.id})">
        <img src="${m.poster}" alt="${m.title}">
        <div><strong>${m.title}</strong><small>${m.genre} • ${m.year}</small></div>
      </div>`).join("");
    $("searchSuggestions").classList.toggle("hidden", !results.length);
  });

  window.selectSearchResult = function(id){
    $("searchSuggestions").classList.add("hidden");
    $("searchInput").value="";
    filterMovies();
    showMovieDetails(id);
  };

  qsa("[data-scroll]").forEach(btn=>btn.addEventListener("click",()=>document.querySelector(btn.dataset.scroll)?.scrollIntoView({behavior:"smooth"})));

  $("surpriseBtn").addEventListener("click", ()=>{
    const m = movies[Math.floor(Math.random()*movies.length)];
    showMovieDetails(m.id);
    toast(`Surprise pick: ${m.title}`);
  });

  qsa(".mood-btn").forEach(btn=>btn.addEventListener("click", ()=>{
    state.activeMood = btn.dataset.mood;
    qsa(".mood-btn").forEach(x=>x.classList.toggle("active",x===btn));
    renderMoodResults();
  }));

  $("clearHistoryBtn").addEventListener("click", ()=>{state.recentlyViewed=[];saveState();renderAllSections();toast("History cleared");});
  $("clearProgressBtn").addEventListener("click", ()=>{state.progress={};saveState();renderContinueWatching();toast("Progress cleared");});

  $("progressSlider").addEventListener("input", ()=>{
    const id = state.currentMovieId; if(!id) return;
    state.progress[id]=Number($("progressSlider").value);
    $("progressLabel").textContent=`${state.progress[id]}%`;
    saveState(); renderContinueWatching();
  });

  $("reviewForm").addEventListener("submit", e=>{
    e.preventDefault();
    const id = state.currentMovieId; if(!id) return;
    state.reviews[id] = state.reviews[id] || [];
    state.reviews[id].push({name:$("reviewName").value.trim(),text:$("reviewText").value.trim()});
    $("reviewForm").reset(); saveState(); renderReviews(id); toast("Review posted");
  });

  $("themeToggle").addEventListener("click", ()=>{
    state.themeIndex=(state.themeIndex+1)%3; saveState(); applyTheme(); toast("Theme changed");
  });

  $("languageBtn").addEventListener("click", ()=>toast("Use the language filter in Discover to browse by language."));

  $("notificationBtn").addEventListener("click", ()=>{
    $("notificationPanel").classList.toggle("hidden");
    $("profileMenu").classList.add("hidden");
  });
  $("profileMenuBtn").addEventListener("click", ()=>{
    $("profileMenu").classList.toggle("hidden");
    $("notificationPanel").classList.add("hidden");
  });

  $("switchProfileBtn").addEventListener("click", ()=>{
    $("app").classList.add("hidden");
    state.currentProfile=null; saveState();
    $("profileScreen").classList.remove("hidden");
  });

  $("logoutBtn").addEventListener("click", ()=>{
    state.authUser=null; state.currentProfile=null; saveState();
    $("app").classList.add("hidden");
    $("authScreen").classList.remove("hidden");
    toast("Logged out");
  });

  $("addProfileBtn").addEventListener("click",()=>$("profileCreatorModal").classList.add("active"));
  $("profileCreatorForm").addEventListener("submit",e=>{
    e.preventDefault();
    state.profiles.push({id:Date.now(),name:$("newProfileName").value.trim(),avatar:$("newProfileAvatar").value});
    saveState();renderProfiles();closeProfileCreator();$("profileCreatorForm").reset();toast("Profile created");
  });

  $("mobileSearchBtn").addEventListener("click", ()=>{
    document.querySelector("#discover").scrollIntoView({behavior:"smooth"});
    setTimeout(()=>$("searchInput").focus(),500);
  });

  document.addEventListener("keydown", e=>{
    if(e.key==="Escape"){closeMovieModal();closeTrailerModal();closeProfileCreator();}
    if(e.key==="/" && !$("app").classList.contains("hidden")){e.preventDefault();$("searchInput").focus();}
  });

  $("movieModal").addEventListener("click",e=>{if(e.target===$("movieModal"))closeMovieModal();});
  $("trailerModal").addEventListener("click",e=>{if(e.target===$("trailerModal"))closeTrailerModal();});
}

function applyTheme(){
  document.body.classList.remove("theme-aurora","theme-royal");
  if(state.themeIndex===1) document.body.classList.add("theme-aurora");
  if(state.themeIndex===2) document.body.classList.add("theme-royal");
}

window.closeProfileCreator = function(){ $("profileCreatorModal").classList.remove("active"); };

initialize();
