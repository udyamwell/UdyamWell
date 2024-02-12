import React, { useEffect, useState, useRef } from "react";
import VideoLectureCard from "./VideoLectureCard";
import "./styles/courseCard.css";
import { Box } from "@mui/material";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCource } from "../slices/videos";
// import CircularWithValueLabel from "./CircularLabel";
import "./CustomVideoPlayer.css";
import Slider from "@mui/material/Slider";
import Forward10Icon from "@mui/icons-material/Forward10";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import SettingsIcon from "@mui/icons-material/Settings";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import IosShareIcon from "@mui/icons-material/IosShare";
import ReactPlayer from "react-player";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import LoadingSpinner from "./LoadingSpinner";
// import TextField from "@mui/material/TextField";
import SearchBox from "../components/SearchBox";
import Bg_course from "../assets/Bg_course.png";
const SingleCoursePage = () => {
  const { id } = useParams();
  const { courseName, lectures } = useSelector((state) => state.lectures);
  const dispatch = useDispatch();
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [played, setPlayed] = useState(0);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState("auto");
  const [selectedSpeed, setSelectedSpeed] = useState(1);
  const [isBuffering, setIsBuffering] = useState(false);
  const [setIsFullScreen] = useState(false);
  const handleSearch = (query) => {
    // Perform search logic using the query
    console.log("Search query:", query);
    // Add your search logic here, such as making an API request or filtering data
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    dispatch(fetchSingleCource(id));
  }, [id]); // Add 'id' as a dependency to fetch the course data when it changes
  useEffect(() => {
    // Set the initial selected video URL to the URL of the first lecture
    if (lectures && lectures.length > 0) {
      setSelectedVideoUrl(
        `https://www.udyamwell.com/uploads/course/videos/${lectures[0].video}`
      );
    }
  }, [lectures]);
  const handleCardClick = (videoUrl, index) => {
    setSelectedVideoUrl(videoUrl);
    setSelectedVideoIndex(index);
  };
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(
        (document.fullscreenElement || document.webkitFullscreenElement) !==
          null
      );
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
    };
  }, []);

  const handleSkip = (seconds) => {
    const currentTime = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(currentTime + seconds, "seconds");
  };
  const scaleXValue = -1;

  const divStyle = {
    transform: `scaleX(${scaleXValue})`,
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    playerRef.current.getInternalPlayer().volume = newValue;
    setIsMuted(newValue === 0);
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    const newVolume = isMuted ? 1 : 0;
    setVolume(newVolume);
    playerRef.current.getInternalPlayer().volume = newVolume;
  };
  const handleTimelineChange = (event, newValue) => {
    setPlayed(newValue);
    const newPlayedSeconds = (newValue / 100) * playerRef.current.getDuration();
    playerRef.current.seekTo(newPlayedSeconds, "seconds");
  };
  const handleOpenSettings = () => {
    setShowSettingsDropdown(!showSettingsDropdown);
  };
  const handleQualityChange = (event) => {
    setSelectedQuality(event.target.value);
    setShowSettingsDropdown(false);
  };
  const handleSpeedChange = (event) => {
    setSelectedSpeed(event.target.value);
    playerRef.current.getInternalPlayer().playbackRate = event.target.value;
    setShowSettingsDropdown(false);
  };

  const handleFullScreen = () => {
    const playerWrapper = playerRef.current?.wrapper?.current;

    if (playerWrapper) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if (playerWrapper.requestFullscreen) {
        playerWrapper.requestFullscreen();
      } else if (playerWrapper.webkitRequestFullscreen) {
        playerWrapper.webkitRequestFullscreen(); // for older browsers
      }
    }
  };
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  const dropdownStyle = {
    color: "black",
  };
  const toggleFullScreen = () => {
    const playerWrapper = playerRef.current?.wrapper?.current;

    if (playerWrapper) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if (playerWrapper.requestFullscreen) {
        playerWrapper.requestFullscreen();
      } else if (playerWrapper.webkitRequestFullscreen) {
        playerWrapper.webkitRequestFullscreen();
      }
    }
  };

  return (
    <div className="singleCourse">
      <div className="landingPageCover">
        <img
          src={Bg_course}
          width="100vw"
          alt="landing"
          className="landingPageCover__animation"
        />
      </div>
      {/* <Box
          sx={{
            margin: "10px 0 30px 0 ",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <section style={{ display: "flex" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Your Progress:
            </Typography>
            <CircularWithValueLabel value={25} sx={{ ml: 2 }} />
          </section>
        </Box> */}
      <div className="mainVidContainer">
        <div className="mainVid" style={{ marginBottom: "50px" }}>
          <div className="top-section">
            <h1>
              Udyam<span style={{ color: "green" }}>Well</span> Learning System
            </h1>
            <div className="search">
              <SearchBox onSearch={handleSearch} />
            </div>
          </div>

          <hr />
          {/* <iframe
                        style={{ marginTop: "26px" }}
                        width="100%"
                        height="194"
                        src={selectedVideoUrl}
                        title="Embedded Video Player"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe> */}

          {/* <div className="content">
                        <h3 style={{ color: "grey" }}>rgstrfhgbtd</h3>
                    </div> */}
          <div className="mid-section">
            <div className="custom-video-player">
              <ReactPlayer
                ref={playerRef}
                url={selectedVideoUrl}
                playing={isPlaying}
                volume={volume}
                onProgress={(progress) =>
                  setPlayed((progress.played * 100).toFixed(2))
                }
                onBuffer={() => setIsBuffering(true)}
                onBufferEnd={() => setIsBuffering(false)}
                controls={false}
                width="100%"
                height="100%"
              />
              {isBuffering && <LoadingSpinner />}
              <div className="timeline">
                <div className="progress-bar">
                  <Slider
                    value={played}
                    onChange={handleTimelineChange}
                    min={0}
                    max={100}
                    step={0.1}
                    // style={{ width: "100%", margin: "0 0px" }}
                  />
                </div>

                <div className="custom-controls">
                  {/* <div className="time-indicator">
                    {playerRef.current && (
                      <>
                        <span>
                          {formatTime(playerRef.current.getCurrentTime())}
                        </span>
                        /
                        <span>
                          {formatTime(playerRef.current.getDuration())}
                        </span>
                      </>
                    )}
                  </div> */}
                </div>
                <div className="other-controls">
                  <div className="left-controls">
                    <button onClick={handlePlayPause}>
                      {isPlaying ? (
                        <PauseIcon sx={{ fontSize: 36 }} />
                      ) : (
                        <PlayArrowIcon sx={{ fontSize: 36 }} />
                      )}
                    </button>
                    <button onClick={() => handleSkip(-10)}>
                      <Forward10Icon sx={{ fontSize: 36 }} style={divStyle} />
                    </button>
                    <button onClick={() => handleSkip(10)}>
                      <Forward10Icon sx={{ fontSize: 36 }} />
                    </button>
                    <div
                      className="volume-button"
                      onMouseEnter={() => setShowVolumeSlider(true)}
                      onMouseLeave={() => setShowVolumeSlider(false)}
                    >
                      {" "}
                      <button onClick={handleToggleMute}>
                        {isMuted ? (
                          <VolumeOffIcon sx={{ fontSize: 36 }} />
                        ) : (
                          <VolumeUpIcon sx={{ fontSize: 36 }} />
                        )}
                      </button>
                      {showVolumeSlider && (
                        <div className="volume-slider">
                          <Slider
                            sx={{ fontSize: 36 }}
                            value={volume}
                            onChange={handleVolumeChange}
                            min={0}
                            max={1}
                            step={0.01}
                            style={{
                              width: "90px",
                              transform: "rotate(0deg)",
                              marginLeft: "10px",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="right-controls">
                    <div className="settings-dropdown">
                      <button onClick={handleOpenSettings}>
                        <SettingsIcon sx={{ fontSize: 36 }} />
                      </button>
                      {showSettingsDropdown && (
                        <div className="dropdown-menu" style={dropdownStyle}>
                          <Select
                            value={selectedQuality}
                            onChange={handleQualityChange}
                            displayEmpty
                            style={{ marginRight: "10px" }}
                          >
                            <MenuItem value="" disabled>
                              Streaming Quality
                            </MenuItem>
                            <MenuItem value="auto">Auto</MenuItem>
                            <MenuItem value="240p">240p</MenuItem>
                            <MenuItem value="360p">360p</MenuItem>
                            <MenuItem value="720p">720p</MenuItem>
                            <MenuItem value="1080p">1080p</MenuItem>
                          </Select>
                          <Select
                            value={selectedSpeed}
                            onChange={handleSpeedChange}
                          >
                            <MenuItem value={0.75}>0.75x</MenuItem>
                            <MenuItem value={0.5}>0.5x</MenuItem>
                            <MenuItem value={1}>Normal Speed</MenuItem>
                            <MenuItem value={1.25}>1.25x</MenuItem>
                            <MenuItem value={1.5}>1.5x</MenuItem>
                            <MenuItem value={2}>2x</MenuItem>
                          </Select>
                        </div>
                      )}
                    </div>
                    <button onClick={handleFullScreen}>
                      <FullscreenIcon sx={{ fontSize: 36 }} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="View-controls">
                <div className="view-right">
                  <VisibilityIcon />
                  <span>100 views</span>
                </div>
                <div className="view-right">
                  <FavoriteBorderIcon />
                  <ChatBubbleOutlineIcon />
                  <IosShareIcon />
                </div>
              </div>
              <div className="Description">
                <h1>{courseName}</h1>
                <div className="date-uploaded" style={{ color: "grey" }}>
                  26 January 2023
                </div>
                <div className="desc-txt">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptate ratione veritatis aperiam quas, voluptates at?
                  Accusantium quis debitis iure reprehenderit nemo minima ipsam
                  quaerat, aperiam vel, incidunt esse voluptate at.
                </div>
              </div>
            </div>

            <div className="recommendations" style={{ marginBottom: "50px" }}>
              <div className="playlist-banner">
                <img src="" alt="Banner" />
              </div>

              <Box sx={{ mt: 2, ml: 2 }}>
                {/* Render the VideoLectureCard component passing lectures data and handleCardClick */}
                <VideoLectureCard
                  lectures={lectures}
                  type={"video"}
                  onCardClick={handleCardClick}
                  selectedVideoIndex={selectedVideoIndex}
                />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleCoursePage;
