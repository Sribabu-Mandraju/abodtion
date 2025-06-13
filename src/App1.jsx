import React from "react";

const App1 = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta content="#040000" name="theme-color" />
      <meta
        content="https://img.itch.zone/aW1nLzIxNDkyNjE1LmdpZg==/original/KAi%2FQH.gif"
        property="og:image"
      />
      <link
        type="image/gif"
        rel="icon"
        href="https://img.itch.zone/aW1nLzIxNDkyNjE1LmdpZg==/32x32%23m/qMoaNi.gif"
      />
      <meta content="itch.io" property="og:site_name" />
      <meta content={4503599627724030} property="twitter:account_id" />
      <meta
        content="Cozy up your new abode! Begin unpacking stuff and try not to think about the past..."
        property="og:description"
      />
      <meta
        content="Cozy up your new abode! Begin unpacking stuff and try not to think about the past..."
        name="description"
      />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="games/3555173" name="itch:path" />
      <link
        type="application/rss+xml"
        title="Abodtion Devlog"
        rel="alternate"
        href="https://korogames.itch.io/abodtion/devlog.rss"
      />
      <meta content="@itchio" name="twitter:site" />
      <meta content="Abodtion by koro.games, IRoRoI" name="twitter:title" />
      <meta
        content="Cozy up your new abode! Begin unpacking stuff and try not to think about the past... Available for Windows"
        name="twitter:description"
      />
      <meta content="summary_large_image" name="twitter:card" />
      <meta
        content="https://img.itch.zone/aW1nLzIxNDkyNjE1LmdpZg==/508x254%23mb/Fa6Ymf.gif"
        property="twitter:image"
      />
      <meta content="@_korogames" property="twitter:creator" />
      <meta content="https://korogames.itch.io/abodtion" name="twitter:url" />
      <title>Abodtion by koro.games, IRoRoI</title>
      <meta
        name="csrf_token"
        value="WyJqU2F4IiwxNzQ5ODEwMzE1LCJBWTlzQkw4UW1GMzhnNHMiXQ==.n80vCLFQB2vvLQTuNyxNt1gLaks="
      />
      <link
        rel="stylesheet"
        href="https://static.itch.io/game.css?1749538225"
      />
      <style
        type="text/css"
        id="game_theme"
        dangerouslySetInnerHTML={{
          __html:
            "\n            :root {\n                --itchio_ui_bg: #292828;\n                --itchio_ui_bg_dark: #232222\n            }\n\n            .wrapper {\n                --itchio_font_family: 'Finger Paint';\n                --itchio_bg_color: #040000;\n                --itchio_bg2_color: rgba(246, 232, 228, 1);\n                --itchio_bg2_sub: #ded0cc;\n                --itchio_text_color: #3e1111;\n                --itchio_link_color: #fa5c5c;\n                --itchio_border_color: #ddbab0;\n                --itchio_button_color: #fa5c5c;\n                --itchio_button_fg_color: #ffffff;\n                --itchio_button_shadow_color: #e54747;\n                background-color: #040000;\n                /*! */\n                background-image: url(https://img.itch.zone/aW1nLzIxMTg5ODk1LmdpZg==/original/DD8OYL.gif);\n                ;background-repeat: repeat-x;\n                background-position: 50% 0;\n                /* */\n            }\n\n            .inner_column {\n                color: #3e1111;\n                font-family: 'Finger Paint',Lato,LatoExtended,sans-serif;\n                background-color: rgba(246, 232, 228, 1)\n            }\n\n            .inner_column ::selection {\n                color: #ffffff;\n                background: #fa5c5c\n            }\n\n            .inner_column ::-moz-selection {\n                color: #ffffff;\n                background: #fa5c5c\n            }\n\n            .inner_column h1,.inner_column h2,.inner_column h3,.inner_column h4,.inner_column h5,.inner_column h6 {\n                font-family: inherit;\n                font-weight: bold;\n                color: inherit\n            }\n\n            .inner_column a,.inner_column .footer a {\n                color: #fa5c5c\n            }\n\n            .inner_column .button,.inner_column .button:hover,.inner_column .button:active {\n                background-color: #fa5c5c;\n                color: #ffffff;\n                text-shadow: 0 1px 0px #e54747\n            }\n\n            .inner_column hr {\n                background-color: #ddbab0\n            }\n\n            .inner_column table {\n                border-color: #ddbab0\n            }\n\n            .inner_column .redactor-box .redactor-toolbar li a {\n                color: #fa5c5c\n            }\n\n            .inner_column .redactor-box .redactor-toolbar li a:hover,.inner_column .redactor-box .redactor-toolbar li a:active,.inner_column .redactor-box .redactor-toolbar li a.redactor-act {\n                background-color: #fa5c5c !important;\n                color: #ffffff !important;\n                text-shadow: 0 1px 0px #e54747 !important\n            }\n\n            .inner_column .redactor-box .redactor-toolbar .re-button-tooltip {\n                text-shadow: none\n            }\n\n            .game_frame {\n                background: #ded0cc;\n                /*! */\n                /* */\n            }\n\n            .game_frame .embed_info {\n                background-color: rgba(246, 232, 228, 0.85)\n            }\n\n            .game_loading .loader_bar .loader_bar_slider {\n                background-color: #fa5c5c\n            }\n\n            .view_game_page .reward_row,.view_game_page .bundle_row {\n                border-color: #ded0cc !important\n            }\n\n            .view_game_page .game_info_panel_widget {\n                background: rgba(222, 208, 204, 1)\n            }\n\n            .view_game_page .star_value .star_fill {\n                color: #fa5c5c\n            }\n\n            .view_game_page .rewards .quantity_input {\n                background: rgba(250, 247, 247, 1);\n                border-color: rgba(62, 17, 17, 0.5);\n                color: #3e1111\n            }\n\n            .view_game_page .right_col {\n                display: block\n            }\n\n            .game_devlog_page li .meta_row .post_likes {\n                border-color: #ded0cc\n            }\n\n            .game_devlog_post_page .post_like_button {\n                box-shadow: inset 0 0 0 1px #ddbab0\n            }\n\n            .game_comments_widget .community_post .post_footer a,.game_comments_widget .community_post .post_footer .vote_btn,.game_comments_widget .community_post .post_header .post_date a,.game_comments_widget .community_post .post_header .edit_message {\n                color: rgba(62, 17, 17, 0.5)\n            }\n\n            .game_comments_widget .community_post .reveal_full_post_btn {\n                background: linear-gradient(to bottom, transparent, #f6e8e4 50%, #f6e8e4);\n                color: #fa5c5c\n            }\n\n            .game_comments_widget .community_post .post_votes {\n                border-color: rgba(62, 17, 17, 0.2)\n            }\n\n            .game_comments_widget .community_post .post_votes .vote_btn:hover {\n                background: rgba(62, 17, 17, 0.05)\n            }\n\n            .game_comments_widget .community_post .post_footer .vote_btn {\n                border-color: rgba(62, 17, 17, 0.5)\n            }\n\n            .game_comments_widget .community_post .post_footer .vote_btn span {\n                color: inherit\n            }\n\n            .game_comments_widget .community_post .post_footer .vote_btn:hover,.game_comments_widget .community_post .post_footer .vote_btn.voted {\n                background-color: #fa5c5c;\n                color: #ffffff;\n                text-shadow: 0 1px 0px #e54747;\n                border-color: #fa5c5c\n            }\n\n            .game_comments_widget .form .redactor-box,.game_comments_widget .form .click_input,.game_comments_widget .form .forms_markdown_input_widget {\n                border-color: rgba(62, 17, 17, 0.5);\n                background: transparent\n            }\n\n            .game_comments_widget .form .redactor-layer,.game_comments_widget .form .redactor-toolbar,.game_comments_widget .form .click_input,.game_comments_widget .form .forms_markdown_input_widget {\n                background: rgba(250, 247, 247, 1)\n            }\n\n            .game_comments_widget .form .forms_markdown_input_widget .markdown_toolbar button {\n                color: inherit;\n                opacity: 0.6\n            }\n\n            .game_comments_widget .form .forms_markdown_input_widget .markdown_toolbar button:hover,.game_comments_widget .form .forms_markdown_input_widget .markdown_toolbar button:active {\n                opacity: 1;\n                background-color: #fa5c5c !important;\n                color: #ffffff !important;\n                text-shadow: 0 1px 0px #e54747 !important\n            }\n\n            .game_comments_widget .form .forms_markdown_input_widget .markdown_toolbar,.game_comments_widget .form .forms_markdown_input_widget li {\n                border-color: rgba(62, 17, 17, 0.5)\n            }\n\n            .game_comments_widget .form textarea {\n                border-color: rgba(62, 17, 17, 0.5);\n                background: rgba(250, 247, 247, 1);\n                color: inherit\n            }\n\n            .game_comments_widget .form .redactor-toolbar {\n                border-color: rgba(62, 17, 17, 0.5)\n            }\n\n            .game_comments_widget .hint {\n                color: rgba(62, 17, 17, 0.5)\n            }\n\n            .game_community_preview_widget .community_topic_row .topic_tag {\n                background-color: #ded0cc\n            }\n\n            .footer .svgicon,.view_game_page .more_information_toggle .svgicon {\n                fill: #3e1111 !important\n            }\n        ",
        }}
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Finger%20Paint%3A400%2C400italic%2C700%2C700italic"
      />
      <ul className="user_tools hidden" id="user_tools">
        <li>
          <a className="action_btn view_more" href="https://korogames.itch.io">
            <svg
              height={16}
              version="1.1"
              aria-hidden=""
              className="svgicon icon_itchio_new"
              role="img"
              width={18}
              viewBox="0 0 262.728 235.452"
            >
              <path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08c10.684-30.007 26.017-30.007 29.85-30.007zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z" />
            </svg>
            <span className="full_label">View all by koro.games</span>
            <span className="mobile_label">koro.games</span>
          </a>
        </li>
        <li>
          <a
            data-user_id={1888918}
            data-follow_url="https://korogames.itch.io/-/follow?source=game"
            className="follow_user_btn action_btn"
            data-register_action="follow_user"
            data-unfollow_url="https://korogames.itch.io/-/unfollow?source=game"
            href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=follow_user"
          >
            <svg
              strokeWidth={2}
              version="1.1"
              aria-hidden=""
              height={18}
              strokeLinejoin="round"
              stroke="currentColor"
              strokeLinecap="round"
              fill="none"
              className="svgicon icon_user_plus on_follow"
              role="img"
              width={18}
              viewBox="0 0 24 24"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy={7} r={4} />
              <line x1={20} y1={8} x2={20} y2={14} />
              <line x1={23} y1={11} x2={17} y2={11} />
            </svg>
            <svg
              strokeWidth={2}
              version="1.1"
              aria-hidden=""
              height={18}
              strokeLinejoin="round"
              stroke="currentColor"
              strokeLinecap="round"
              fill="none"
              className="svgicon icon_user_check on_unfollow"
              role="img"
              width={18}
              viewBox="0 0 24 24"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy={7} r={4} />
              <polyline points="17 11 19 13 23 9" />
            </svg>
            <span className="on_follow">
              <span className="full_label">Follow koro.games</span>
              <span className="mobile_label">Follow</span>
            </span>
            <span className="on_unfollow">
              <span className="full_label">Following koro.games</span>
              <span className="mobile_label">Following</span>
            </span>
          </a>
        </li>
        <li>
          <a
            className="action_btn add_to_collection_btn"
            href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=add_to_collection"
          >
            <svg
              strokeWidth={2}
              version="1.1"
              aria-hidden=""
              height={18}
              strokeLinejoin="round"
              stroke="currentColor"
              strokeLinecap="round"
              fill="none"
              className="svgicon icon_collection_add2"
              role="img"
              width={18}
              viewBox="0 0 24 24"
            >
              <path d="M 1,6 H 14" />
              <path d="M 1,11 H 14" />
              <path d="m 1,16 h 9" />
              <path d="M 18,11 V 21" />
              <path d="M 13,16 H 23" />
            </svg>
            <span className="full_label">Add To Collection</span>
            <span className="mobile_label">Collection</span>
          </a>
        </li>
        <li className="community_link">
          <a
            className="action_btn"
            href="https://korogames.itch.io/abodtion#comments"
          >
            <svg
              strokeWidth={2}
              version="1.1"
              aria-hidden=""
              height={18}
              strokeLinejoin="round"
              stroke="currentColor"
              strokeLinecap="round"
              fill="none"
              className="svgicon icon_comment"
              role="img"
              width={18}
              viewBox="0 0 24 24"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Comments
          </a>
        </li>
        <li className="devlog_link">
          <a
            className="action_btn"
            href="https://korogames.itch.io/abodtion/devlog"
          >
            <svg
              strokeWidth={2}
              version="1.1"
              aria-hidden=""
              height={18}
              strokeLinejoin="round"
              stroke="currentColor"
              strokeLinecap="round"
              fill="none"
              className="svgicon icon_news"
              role="img"
              width={18}
              viewBox="0 0 24 24"
            >
              <rect x={1} y={3} width={22} height={18} rx={2} ry={2} />
              <line x1={6} y1={8} x2={18} y2={8} />
              <line x1={6} y1={12} x2={18} y2={12} />
              <line x1={6} y1={16} x2={18} y2={16} />
            </svg>
            Devlog
          </a>
        </li>
      </ul>
      <div className="main wrapper" id="wrapper">
        <div
          className="inner_column size_large family_finger-paint"
          id="inner_column"
        >
          <div className="header has_image align_center" id="header">
            <img
              src="https://img.itch.zone/aW1nLzIxMTg5OTQ4LnBuZw==/original/VJT2FI.png"
              alt="Abodtion"
            />
            <h1 className="game_title" itemProp="name">
              Abodtion
            </h1>
          </div>
          <div
            className="view_game_page page_widget base_widget buy_on_top"
            id="view_game_5293531"
          >
            <div className="header_buy_row">
              <p>A downloadable game for Windows</p>
              <div className="buy_row">
                <div className="button_message">
                  <a
                    className="button buy_btn"
                    href="https://korogames.itch.io/abodtion/purchase"
                  >
                    Download Now
                  </a>
                  <span className="buy_message">
                    <span className="sub">Name your own price</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="left_col column">
                <div className="formatted_description user_formatted">
                  <h3>
                    <a href="https://korogames.itch.io/abodtion/rate">
                      <img
                        src="https://img.itch.zone/aW1nLzIxMjc3NDM3LnBuZw==/original/40jbyJ.png"
                        loading="lazy"
                      />
                    </a>
                  </h3>
                  <h3>About</h3>
                  <p>
                    The incedenst require you to move out.&nbsp;
                    <br />
                    Let 's start unpacking stuff and cozy up our new abode!
                  </p>
                  <h3 className="text-center">
                    <img
                      src="https://img.itch.zone/aW1nLzIxMTg5NDk0LmdpZg==/original/iUhlzw.gif"
                      loading="lazy"
                    />
                  </h3>
                  <p>
                    <strong>Abodtion</strong>
                    is a short first-person psychological game about what
                    remains when something is lost before it begins.
                  </p>
                  <p>
                    Every action feels normal —until it doesn't.
                    <br />
                    Every reflection looks familiar —until it blinks.
                    <br />
                    Every sound is real —even if no one is there.
                  </p>
                  <h3 className="text-center">
                    <img
                      src="https://img.itch.zone/aW1nLzIxMTg5NDk3LmdpZg==/original/fkurmz.gif"
                      loading="lazy"
                    />
                  </h3>
                  <blockquote>
                    unpack the past
                    <br />
                    reheat what's left
                    <br />
                    live with the echo
                  </blockquote>
                  <h3>Features</h3>
                  <ul>
                    <li>home objects as emotional triggers</li>
                    <li>microwave as narrative core</li>
                    <li>~15 minutes playtime</li>
                  </ul>
                  <h3>Controls</h3>
                  <table>
                    <tbody>
                      <tr>
                        <td>WASD</td>
                        <td>move</td>
                      </tr>
                      <tr>
                        <td>Ctrl &nbsp;</td>
                        <td>crouch</td>
                      </tr>
                      <tr>
                        <td>LMB / RMB</td>
                        <td>grab objects</td>
                      </tr>
                      <tr>
                        <td>E</td>
                        <td>interact</td>
                      </tr>
                      <tr>
                        <td>Esc &nbsp;</td>
                        <td>pause</td>
                      </tr>
                    </tbody>
                  </table>
                  <h3 className="text-center">
                    <img
                      src="https://img.itch.zone/aW1nLzIxMTg5NDk4LmdpZg==/original/fOs0K0.gif"
                      loading="lazy"
                    />
                  </h3>
                  <h3>Credits</h3>
                  <p>
                    idea, art, code - <em>koro.games team</em>
                    <br />
                    music - <em>muyo5438</em>
                    <br />
                    business/cooperation -
                    <a
                      href="mailto:work@koro.games"
                      rel="nofollow noopener"
                      referrerPolicy="origin"
                    >
                      <em>work@koro.games</em>
                    </a>
                  </p>
                  <p />
                  <h4 className="text-center">⚠️ Content Warning</h4>
                  <p className="text-center">
                    This game is not suitable for children
                    <br />
                    or those who are easily disturbed.
                  </p>
                  <p>
                    <span />
                  </p>
                </div>
                <div className="more_information_toggle">
                  <div className="toggle_row">
                    <a className="toggle_info_btn" href="javascript:void(0)">
                      More information
                      <svg
                        height={6}
                        version="1.1"
                        aria-hidden=""
                        className="svgicon icon_down_tick"
                        role="img"
                        width={12}
                        viewBox="0 0 37 20"
                      >
                        <path d="m2.0858 0c-1.1535 0-2.0858 0.86469-2.0858 1.9331 0 0.5139 0.21354 1.0183 0.38704 1.1881l18.113 16.879 18.112-16.879c0.174-0.1696 0.388-0.674 0.388-1.1879 0-1.0684-0.932-1.9331-2.086-1.9331-0.577 0-1.111 0.23008-1.49 0.57992l-14.924 13.894-14.925-13.893c-0.3777-0.34998-0.9134-0.581-1.4902-0.581z" />
                      </svg>
                    </a>
                  </div>
                  <div className="info_panel_wrapper">
                    <div
                      className="game_info_panel_widget base_widget"
                      id="game_info_panel_5873593"
                    >
                      <table>
                        <tbody>
                          <tr>
                            <td>Updated</td>
                            <td>
                              <abbr title="11 June 2025 @ 15:04 UTC">
                                <span
                                  className="icon icon-stopwatch"
                                  aria-hidden="true"
                                />
                                1 day ago
                              </abbr>
                            </td>
                          </tr>
                          <tr>
                            <td>Published</td>
                            <td>
                              <abbr title="14 May 2025 @ 16:55 UTC">
                                <span
                                  className="icon icon-stopwatch"
                                  aria-hidden="true"
                                />
                                29 days ago
                              </abbr>
                            </td>
                          </tr>
                          <tr>
                            <td>Status</td>
                            <td>
                              <a href="https://itch.io/games/released">
                                Released
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Platforms</td>
                            <td>
                              <a href="https://itch.io/games/platform-windows">
                                Windows
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Rating</td>
                            <td>
                              <div
                                itemScope=""
                                itemType="http://schema.org/AggregateRating"
                                itemProp="aggregateRating"
                                className="aggregate_rating"
                                title="4.3"
                              >
                                <div
                                  className="star_value"
                                  content="4.3"
                                  itemProp="ratingValue"
                                >
                                  <span className="screenreader_only">
                                    Rated 4.3 out of 5 stars
                                  </span>
                                  <div
                                    className="star_fill"
                                    style={{ width: "86.06299%" }}
                                  >
                                    <span
                                      className="star icon-star"
                                      aria-hidden="true"
                                    />
                                    <span
                                      className="star icon-star"
                                      aria-hidden="true"
                                    />
                                    <span
                                      className="star icon-star"
                                      aria-hidden="true"
                                    />
                                    <span
                                      className="star icon-star"
                                      aria-hidden="true"
                                    />
                                    <span
                                      className="star icon-star"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <div className="star_holes">
                                    <span
                                      className="star icon-star2"
                                      aria-hidden="true"
                                    />
                                    <span
                                      className="star icon-star2"
                                      aria-hidden="true"
                                    />
                                    <span
                                      className="star icon-star2"
                                      aria-hidden="true"
                                    />
                                    <span
                                      className="star icon-star2"
                                      aria-hidden="true"
                                    />
                                    <span
                                      className="star icon-star2"
                                      aria-hidden="true"
                                    />
                                  </div>
                                </div>
                                <span
                                  className="rating_count"
                                  content={254}
                                  itemProp="ratingCount"
                                >
                                  (254
                                  <span className="screenreader_only">
                                    total ratings
                                  </span>
                                  )
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Authors</td>
                            <td>
                              <a href="https://korogames.itch.io">koro.games</a>
                              , <a href="https://iroroi.itch.io">IRoRoI</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Genre</td>
                            <td>
                              <a href="https://itch.io/games/genre-adventure">
                                Adventure
                              </a>
                              ,{" "}
                              <a href="https://itch.io/games/genre-simulation">
                                Simulation
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Tags</td>
                            <td>
                              <a href="https://itch.io/games/tag-3d">3D</a>,{" "}
                              <a href="https://itch.io/games/tag-creepy">
                                Creepy
                              </a>
                              ,{" "}
                              <a href="https://itch.io/games/tag-first-person">
                                First-Person
                              </a>
                              ,{" "}
                              <a href="https://itch.io/games/tag-horror">
                                Horror
                              </a>
                              ,{" "}
                              <a href="https://itch.io/games/tag-psychological-horror">
                                Psychological Horror
                              </a>
                              ,{" "}
                              <a href="https://itch.io/games/tag-short">
                                Short
                              </a>
                              ,{" "}
                              <a href="https://itch.io/games/tag-singleplayer">
                                Singleplayer
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Average session</td>
                            <td>
                              <a href="https://itch.io/games/duration-half-hour">
                                About a half-hour
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Languages</td>
                            <td>
                              <a href="https://itch.io/games/lang-en">
                                English
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Inputs</td>
                            <td>
                              <a href="https://itch.io/games/input-keyboard">
                                Keyboard
                              </a>
                              ,{" "}
                              <a href="https://itch.io/games/input-mouse">
                                Mouse
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Accessibility</td>
                            <td>
                              <a href="https://itch.io/games/accessibility-subtitles">
                                Subtitles
                              </a>
                              ,{" "}
                              <a href="https://itch.io/games/accessibility-tutorial">
                                Interactive tutorial
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Links</td>
                            <td>
                              <a
                                rel="nofollow noopener"
                                href="https://store.steampowered.com/developer/korogames"
                              >
                                Steam
                              </a>
                              ,{" "}
                              <a
                                rel="nofollow noopener"
                                href="https://twitter.com/_KOROGAMES"
                              >
                                Twitter/X
                              </a>
                              ,{" "}
                              <a
                                rel="nofollow noopener"
                                href="https://www.youtube.com/@_korogames"
                              >
                                YouTube
                              </a>
                              ,{" "}
                              <a
                                rel="nofollow noopener"
                                href="https://discord.com/invite/awn5asbSTW"
                              >
                                Discord
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <h2 id="download">Download</h2>
                <div className="buy_row">
                  <div className="button_message">
                    <a
                      className="button buy_btn"
                      href="https://korogames.itch.io/abodtion/purchase"
                    >
                      Download Now
                    </a>
                    <span className="buy_message">
                      <span className="sub">Name your own price</span>
                    </span>
                  </div>
                </div>
                <div className="uploads">
                  <p>
                    Click download now to get access to the following files:
                  </p>
                  <div
                    className="upload_list_widget base_widget"
                    id="upload_list_6849800"
                  >
                    <div className="upload">
                      <div className="info_column">
                        <div className="upload_name">
                          <strong className="name" title="Abodtion.zip">
                            Abodtion.zip
                          </strong>
                          <span className="file_size">
                            <span>80 MB</span>
                          </span>
                          <span className="download_platforms">
                            <span
                              className="icon icon-windows8"
                              title="Download for Windows"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <section className="game_devlog" id="devlog">
                  <h2>Development log</h2>
                  <ul>
                    <li>
                      <a href="https://korogames.itch.io/abodtion/devlog/950283/abodtion-v12-fixes-new-trailer">
                        Abodtion v1.2 fixes &amp;New Trailer
                      </a>
                      <div className="post_date">
                        <abbr title="22 May 2025 @ 13:29 UTC">
                          <span
                            className="icon icon-stopwatch"
                            aria-hidden="true"
                          />
                          21 days ago
                        </abbr>
                      </div>
                    </li>
                    <li>
                      <a href="https://korogames.itch.io/abodtion/devlog/947490/abodtion-devlog-v11">
                        Abodtion — Devlog v1.1
                      </a>
                      <div className="post_date">
                        <abbr title="18 May 2025 @ 10:33 UTC">
                          <span
                            className="icon icon-stopwatch"
                            aria-hidden="true"
                          />
                          26 days ago
                        </abbr>
                      </div>
                    </li>
                  </ul>
                </section>
                <div
                  className="game_comments_widget base_widget"
                  id="game_comments_9709443"
                >
                  <h2 id="comments">Comments</h2>
                  <p className="form_placeholder">
                    <a
                      href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion"
                      data-register_action="comment"
                    >
                      Log in with itch.io
                    </a>
                    to leave a comment.
                  </p>
                  <div
                    className="community_topic_posts_widget base_widget"
                    id="community_topic_posts_5346592"
                  >
                    <div className="topic_pager ">
                      <span className="page_label">
                        Viewing most recent comments
                        <nobr>
                          <span>1</span>
                          to <span>40</span>
                          of 202
                        </nobr>
                      </span>
                      ·{" "}
                      <a
                        className="page_link"
                        href="https://korogames.itch.io/abodtion/comments?before=163"
                      >
                        Next page
                      </a>
                      ·{" "}
                      <a
                        className="page_link"
                        href="https://korogames.itch.io/abodtion/comments?after=0"
                      >
                        Last page
                      </a>
                    </div>
                    <div
                      className="community_post_list_widget base_widget"
                      id="community_post_list_8884422"
                    >
                      <div
                        className="community_post has_vote_column"
                        id="post-13122007"
                        data-post='{"user_id":4509072,"id":13122007}'
                      >
                        <div className="post_anchor" id="first-post" />
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/sneakyvladimir"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(/static/images/frog-red.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/sneakyvladimir">
                                SneakyVladimir
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-12 22:10:56"
                            >
                              <a href="https://itch.io/post/13122007">
                                12 hours ago
                              </a>
                            </span>
                            <span className="vote_counts" />
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>Marked as trojan, I would be aware</p>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13117084"
                        data-post='{"user_id":190573,"id":13117084}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/slushie2000"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1nLzEzNzM1MDU3LmpwZw==/25x25%23/xs00VY.jpg)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/slushie2000">
                                SLUSHIE
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-12 05:30:21"
                            >
                              <a href="https://itch.io/post/13117084">
                                1 day ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                Really dark game assuming it is indeed about an
                                aborted baby or a miscarriage or something of
                                the like. I thought it was well pieced together
                                for a short horror game!
                              </p>
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/dLTO6yQtelk" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/dLTO6yQtelk/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13116558"
                        data-post='{"user_id":6853706,"id":13116558}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/undeadjinx"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1nLzEwMzczODA0LmpwZw==/25x25%23/dKHOuU.jpg)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/undeadjinx">
                                jinx
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-12 03:07:47"
                            >
                              <a href="https://itch.io/post/13116558">
                                1 day ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                interesting game! i definitely got scared a few
                                times lol. thanks korogames!
                              </p>
                              <p />
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/Czyi2QDj2a4" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/Czyi2QDj2a4/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13115616"
                        data-post='{"user_id":8692717,"id":13115616}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/twee555"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(/static/images/frog-red.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/twee555">
                                TWEE555
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-11 23:41:29"
                            >
                              <a href="https://itch.io/post/13115616">
                                1 day ago
                              </a>
                            </span>
                            <span className="edit_message">(1 edit)</span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p />
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe allowfullscreen="" frameborder="0" src="//www.youtube.com/embed/4Bkw1g2f3ow" height="281" width="500"></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/4Bkw1g2f3ow/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                              <p>
                                This game was nuts just crazy and I loved it, it
                                was scary and just psychological horrorfyingly
                                good Cant wait to see what else you create!
                              </p>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13115287"
                        data-post='{"user_id":8376408,"id":13115287}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/chexlaburg"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(/static/images/frog-gold.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/chexlaburg">
                                chexlaburg
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-11 22:22:17"
                            >
                              <a href="https://itch.io/post/13115287">
                                1 day ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>my psychological horror game GOTY</p>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13114630"
                        data-post='{"user_id":8056194,"id":13114630}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/irbrn"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1nLzIxNTE1MjI0LnBuZw==/25x25%23/cMYdSz.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/irbrn">
                                TwodaysTuesdays
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-11 20:38:12"
                            >
                              <a href="https://itch.io/post/13114630">
                                1 day ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>WTH DID I JUST PLAY!</p>
                              <p>
                                I love the art style of this game and the story
                                behind it. All the levels were so carefully made
                                with a high level of skill and all and I mean
                                ALL of the jump scares got me.&nbsp;
                              </p>
                              <p>W game cant wait to see what else you make!</p>
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/PKviDg-QK0g" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/PKviDg-QK0g/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13114562"
                        data-post='{"user_id":10908926,"id":13114562}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/sebssoodd"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1nLzE2NTI3NDYzLmpwZw==/25x25%23/E5iJqh.jpg)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/sebssoodd">
                                sebssoodd
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-11 20:27:17"
                            >
                              <a href="https://itch.io/post/13114562">
                                1 day ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p />
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/Z7M2Ojqa0fk" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/Z7M2Ojqa0fk/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                              Interesting game, LOOOOVED the graphics!!!
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13113994"
                        data-post='{"user_id":11241479,"id":13113994}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/levelupwithsarah"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1nLzE3MTkyNjk1LnBuZw==/25x25%23/%2BDFrXz.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/levelupwithsarah">
                                LevelUpWithSarah
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-11 18:54:59"
                            >
                              <a href="https://itch.io/post/13113994">
                                1 day ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                Very disturbing game, took me by surprise. Good
                                &nbsp;work, i liked it !💜
                                <br />
                              </p>
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/I_GXYnzYtDY" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/I_GXYnzYtDY/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13112380"
                        data-post='{"user_id":8056194,"id":13112380}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/irbrn"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1nLzIxNTE1MjI0LnBuZw==/25x25%23/cMYdSz.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/irbrn">
                                TwodaysTuesdays
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-11 14:39:05"
                            >
                              <a href="https://itch.io/post/13112380">
                                1 day ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                playing this tonight on live Twitch and Tiktok
                                @TwodaysTuesdays cant wait!!!
                              </p>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13103882"
                        data-post='{"user_id":8065264,"id":13103882}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/pawdeen-crystal"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1nLzE5NTE2OTM3LmpwZw==/25x25%23/evdhIK.jpg)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/pawdeen-crystal">
                                Pawdeen
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-10 11:20:39"
                            >
                              <a href="https://itch.io/post/13103882">
                                2 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                This game is very well made with quite a sad
                                story to it. Good work!&nbsp;
                              </p>
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/FqQsFA4UldQ" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/FqQsFA4UldQ/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13102063"
                        data-post='{"user_id":4919316,"id":13102063}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/mistiphire"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1nLzE0MTA4NDUwLnBuZw==/25x25%23/xvpqr2.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/mistiphire">
                                Misti
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-10 04:08:32"
                            >
                              <a href="https://itch.io/post/13102063">
                                3 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                This game took me by surprise! Defenitely well
                                done with exposition slowly leading you to the
                                answer, leaving the player with random guesses
                                along the way!
                                <br />
                              </p>
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/HGViSenA-IE" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/HGViSenA-IE/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13094834"
                        data-post='{"user_id":6530532,"id":13094834}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/cocozd"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(/static/images/frog-red.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/cocozd">
                                cocozd
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-09 10:08:44"
                            >
                              <a href="https://itch.io/post/13094834">
                                4 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                              <span className="downvotes">(-1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>.</p>
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/AXH0m43oaH4" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/AXH0m43oaH4/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13093037"
                        data-post='{"user_id":10687683,"id":13093037}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/treegrinder526"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(/static/images/frog-gold.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/treegrinder526">
                                Treegrinder526
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-09 03:32:28"
                            >
                              <a href="https://itch.io/post/13093037">
                                4 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>Loved this game and its story!</p>
                              <p />
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/vRVFyk9UJow" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/vRVFyk9UJow/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13091253"
                        data-post='{"user_id":13528902,"id":13091253}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/vlad-in-the-dark"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1nLzIxMDQ4NDM2LnBuZw==/25x25%23/402o7R.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/vlad-in-the-dark">
                                vlad in the dark
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-08 20:44:24"
                            >
                              <a href="https://itch.io/post/13091253">
                                4 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>Great Game!</p>
                              <p>German Deutsch gameplay</p>
                              <p />
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/u1v-ZW6nc3o" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/u1v-ZW6nc3o/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13091093"
                        data-post='{"user_id":7269315,"id":13091093}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/omnipian"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage: "url(/static/images/frog.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/omnipian">
                                omnipian
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-08 20:10:18"
                            >
                              <a href="https://itch.io/post/13091093">
                                4 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p />
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/DP6SbSvBvcM" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/DP6SbSvBvcM/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                              I liked this. Of course a very strong subject
                              matter to pack into such a small game but I think
                              it was done very well and good game all around
                              with the visuals and audio.
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_replies has_vote_column"
                        id="post-13090526"
                        data-post='{"user_id":11124936,"id":13090526}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/benia"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1nLzE4OTY1ODMzLnBuZw==/25x25%23/s1XN2N.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/benia">benia</a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-08 18:31:02"
                            >
                              <a href="https://itch.io/post/13090526">
                                4 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                I think the topic is too difficult to show in a
                                15-minute game. But I believe the devs can pull
                                off something viral if they keep cooking, I will
                                check out their next games.&nbsp;
                                <br />
                                <br />
                              </p>
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/vOTftUpSZ7Y" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/vOTftUpSZ7Y/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                              <span lang="en">
                                <span>
                                  <span />
                                </span>
                              </span>
                              <p />
                              <p>(the video is in Polish)</p>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="community_post_replies top_level_replies">
                        <div
                          className="community_post is_reply has_vote_column"
                          id="post-13113749"
                          data-post='{"user_id":8759498,"id":13113749}'
                        >
                          <div className="post_grid">
                            <div className="post_votes">
                              <a
                                title="Vote up"
                                data-register_action="community_vote"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                                className="vote_up_btn vote_btn"
                              >
                                <svg
                                  height={20}
                                  version="1.1"
                                  aria-hidden=""
                                  className="svgicon icon_vote_up"
                                  role="img"
                                  width={20}
                                  viewBox="0 0 24 24"
                                >
                                  <polygon points="2 18 12 6 22 18" />
                                </svg>
                              </a>
                              <a
                                title="Vote down"
                                data-register_action="community_vote"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                                className="vote_down_btn vote_btn"
                              >
                                <svg
                                  height={20}
                                  version="1.1"
                                  aria-hidden=""
                                  className="svgicon icon_vote_down"
                                  role="img"
                                  width={20}
                                  viewBox="0 0 24 24"
                                >
                                  <polygon points="2 6 12 18 22 6" />
                                </svg>
                              </a>
                            </div>
                            <a
                              className="avatar_container"
                              href="https://itch.io/profile/s7vnteenkicks"
                            >
                              <div
                                className="post_avatar"
                                style={{
                                  backgroundImage:
                                    "url(https://img.itch.zone/aW1nLzIwMTM3MTIyLmpwZWc=/25x25%23/Djn323.jpeg)",
                                }}
                              />
                            </a>
                            <div className="post_header">
                              <span className="post_author">
                                <a href="https://itch.io/profile/s7vnteenkicks">
                                  Cairo !
                                </a>
                              </span>
                              <span
                                className="post_date"
                                title="2025-06-11 18:20:14"
                              >
                                <a href="https://itch.io/post/13113749">
                                  1 day ago
                                </a>
                              </span>
                              <span className="vote_counts" />
                            </div>
                            <div className="post_content">
                              <div
                                className="post_body user_formatted"
                                dir="auto"
                              >
                                <p>!!!</p>
                              </div>
                              <div className="post_footer">
                                <a
                                  className="post_action reply_btn"
                                  data-register_action="community_reply"
                                  href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                                >
                                  Reply
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13090028"
                        data-post='{"user_id":11373285,"id":13090028}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/dope-gameplays"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage: "url(/static/images/frog.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/dope-gameplays">
                                Dope Gameplays
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-08 17:17:55"
                            >
                              <a href="https://itch.io/post/13090028">
                                4 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p />
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/q-Mzm7SjsjI" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/q-Mzm7SjsjI/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                              Awesome Game ! Emotional !
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13089385"
                        data-post='{"user_id":5920301,"id":13089385}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/super-space-squid"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1nLzEwNDcxODYxLmpwZw==/25x25%23/0SaAOP.jpg)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/super-space-squid">
                                Super Space Squid
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-08 15:33:56"
                            >
                              <a href="https://itch.io/post/13089385">
                                4 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                Great atmosphere, combined with fantastic audio
                                design, lovely visuals, a theme and subject
                                &nbsp;that hits hard and fantastic approach in
                                every aspect! Definitely loved it! Keep up the
                                good work! Cheers!
                              </p>
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/7fqf87fhulQ" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/7fqf87fhulQ/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13088277"
                        data-post='{"user_id":12758439,"id":13088277}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/sw2001"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(/static/images/frog-blue.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/sw2001">
                                sw2001
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-08 12:18:37"
                            >
                              <a href="https://itch.io/post/13088277">
                                4 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p />
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/8sg7Nzfdbis" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/8sg7Nzfdbis/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                              Хороший хоррор, разработчику удачи в начинаниях!
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13086805"
                        data-post='{"user_id":10108512,"id":13086805}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/m6-md"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(/static/images/frog-red.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/m6-md">M6-MD</a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-08 07:06:13"
                            >
                              <a href="https://itch.io/post/13086805">
                                5 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p />
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/cazNZA8RjzY" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/cazNZA8RjzY/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                              very good game i really love itttt!!
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13085201"
                        data-post='{"user_id":708246,"id":13085201}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/szamer"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1hZ2UyL3VzZXIvNzA4MjQ2LzEyMjA5NjAuanBn/25x25%23/H%2BG27w.jpg)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/szamer">
                                Szamer
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-08 00:29:19"
                            >
                              <a href="https://itch.io/post/13085201">
                                5 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                Really loved this, it was so weird and different
                                to other indie horrors I play!&nbsp;
                              </p>
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/E4Y-2Mz3bzQ" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/E4Y-2Mz3bzQ/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13079756"
                        data-post='{"user_id":9556205,"id":13079756}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/mempavrai"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage: "url(/static/images/frog.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/mempavrai">
                                Mempavrai
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-07 00:37:05"
                            >
                              <a href="https://itch.io/post/13079756">
                                6 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                This was my favorite indie game of the year so
                                far.&nbsp;bro, keep going, if you make a longer
                                game you 'll be millionaire.
                                <br />
                              </p>
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/im_hMOfHp8c" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/im_hMOfHp8c/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13076587"
                        data-post='{"user_id":11250299,"id":13076587}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/batpan-games"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1nLzE3NzYzODk0LmpwZw==/25x25%23/hhMm3D.jpg)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/batpan-games">
                                Batpan Games
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-06 16:25:36"
                            >
                              <a href="https://itch.io/post/13076587">
                                6 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                That was such a cool game, Loved every part of
                                it.
                                <br />
                                The musics and sound design was spot on!!
                                <br />
                                And The auto Opening of the itch.io page after
                                finishing the game was also a great move.
                                <br />
                                Hope all the best and hope to see more from you.
                                😉
                              </p>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_replies has_vote_column"
                        id="post-13072285"
                        data-post='{"user_id":13499280,"id":13072285}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/rudeus22"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage: "url(/static/images/frog.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/rudeus22">
                                rudeus22
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-06 01:29:20"
                            >
                              <a href="https://itch.io/post/13072285">
                                7 days ago
                              </a>
                            </span>
                            <span className="vote_counts" />
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                This game was disgustingly bad, download if you
                                want a virus in your body. Almost never had
                                worse fun from a game. DO not recommend.{" "}
                              </p>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="community_post_replies top_level_replies">
                        <div
                          className="community_post is_reply has_vote_column"
                          id="post-13072291"
                          data-post='{"user_id":13499280,"id":13072291}'
                        >
                          <div className="post_grid">
                            <div className="post_votes">
                              <a
                                title="Vote up"
                                data-register_action="community_vote"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                                className="vote_up_btn vote_btn"
                              >
                                <svg
                                  height={20}
                                  version="1.1"
                                  aria-hidden=""
                                  className="svgicon icon_vote_up"
                                  role="img"
                                  width={20}
                                  viewBox="0 0 24 24"
                                >
                                  <polygon points="2 18 12 6 22 18" />
                                </svg>
                              </a>
                              <a
                                title="Vote down"
                                data-register_action="community_vote"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                                className="vote_down_btn vote_btn"
                              >
                                <svg
                                  height={20}
                                  version="1.1"
                                  aria-hidden=""
                                  className="svgicon icon_vote_down"
                                  role="img"
                                  width={20}
                                  viewBox="0 0 24 24"
                                >
                                  <polygon points="2 6 12 18 22 6" />
                                </svg>
                              </a>
                            </div>
                            <a
                              className="avatar_container"
                              href="https://itch.io/profile/rudeus22"
                            >
                              <div
                                className="post_avatar"
                                style={{
                                  backgroundImage:
                                    "url(/static/images/frog.png)",
                                }}
                              />
                            </a>
                            <div className="post_header">
                              <span className="post_author">
                                <a href="https://itch.io/profile/rudeus22">
                                  rudeus22
                                </a>
                              </span>
                              <span
                                className="post_date"
                                title="2025-06-06 01:30:31"
                              >
                                <a href="https://itch.io/post/13072291">
                                  7 days ago
                                </a>
                              </span>
                              <span className="vote_counts">
                                <span className="upvotes">(+1)</span>
                              </span>
                            </div>
                            <div className="post_content">
                              <div
                                className="post_body user_formatted"
                                dir="auto"
                              >
                                <p>
                                  Anyone please disagree so I can cook you, I
                                  will have so much info that proves my point.{" "}
                                </p>
                              </div>
                              <div className="post_footer">
                                <a
                                  className="post_action reply_btn"
                                  data-register_action="community_reply"
                                  href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                                >
                                  Reply
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13070365"
                        data-post='{"user_id":4260999,"id":13070365}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/legendofshadows40776"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(/static/images/frog-blue.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/legendofshadows40776">
                                legendofshadows40776
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-05 19:54:01"
                            >
                              <a href="https://itch.io/post/13070365">
                                7 days ago
                              </a>
                            </span>
                            <span className="edit_message">(2 edits)</span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                Bro that guy was speeding through the hallway in
                                the beginning 😭I just wanted to turn the sink
                                off
                              </p>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13069115"
                        data-post='{"user_id":12653546,"id":13069115}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/jacobziegner"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1nLzIxNTE1MDE3LmpwZw==/25x25%23/gBw%2BP4.jpg)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/jacobziegner">
                                Jacob Ziegner
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-05 16:26:27"
                            >
                              <a href="https://itch.io/post/13069115">
                                7 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                the minecart was a really interesting story
                                telling medium! great work.{" "}
                              </p>
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/MJcvLLBUcEI" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/MJcvLLBUcEI/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13066661"
                        data-post='{"user_id":4555499,"id":13066661}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/stonecastle"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1nLzcxMjY5NDIucG5n/25x25%23/JcdnhL.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/stonecastle">
                                Stone Castle Lab
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-05 08:18:38"
                            >
                              <a href="https://itch.io/post/13066661">
                                8 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p />
                              <div>
                                &nbsp;
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/0A8g2vBaFBQ" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/0A8g2vBaFBQ/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                              good
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13062444"
                        data-post='{"user_id":5003385,"id":13062444}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/dweeb-gaming"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1nLzE0ODIyOTY5LmpwZw==/25x25%23/yBz1kv.jpg)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/dweeb-gaming">
                                Dweeb Gaming
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-04 18:58:52"
                            >
                              <a href="https://itch.io/post/13062444">
                                8 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                very interesting game !&nbsp;
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="560" height="315" src="https://www.youtube.com/embed/WpMJDNbMisk?si=gtK453kQ-GxKD_In" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/WpMJDNbMisk?si=gtK453kQ-GxKD_In/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </p>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13060464"
                        data-post='{"user_id":225756,"id":13060464}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/robboberty"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1hZ2UyL3VzZXIvMjI1NzU2Lzg1NTU1MS5wbmc=/25x25%23/HpAAVD.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/robboberty">
                                RobBoberty
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-04 14:24:04"
                            >
                              <a href="https://itch.io/post/13060464">
                                8 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+1)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                Pretty good. couple jumpscares got me and the
                                trauma expressed here is rough.
                              </p>
                              <p />
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/gtiqV8sgmYI" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/gtiqV8sgmYI/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13060195"
                        data-post='{"user_id":11139608,"id":13060195}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/lilfrillish"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(/static/images/frog-gold.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/lilfrillish">
                                LilFrillish
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-04 13:21:22"
                            >
                              <a href="https://itch.io/post/13060195">
                                8 days ago
                              </a>
                            </span>
                            <span className="edit_message">(1 edit)</span>
                            <span className="vote_counts">
                              <span className="upvotes">(+2)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                First of all, this game was crazy. Secondly,
                                this game had a compelling story and I trully
                                feel like we the audeince connected with our
                                main character 's hardships. The mechanic in the
                                cave with the cart of uncovering the
                                insecurtiries/shames whithin the blood was
                                great! Anyways kudos all around! If you wanted
                                to expand on this in the future I feel like you
                                could play with the creepin3ss outside of the
                                dream world/state? For instance a like
                                halucination of the crib in their room or an
                                "other charater "of the wife thats obviously not
                                her.&nbsp;:&gt;&nbsp;
                              </p>
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe allowfullscreen="" frameborder="0" src="//www.youtube.com/embed/jKPqOtiX3SQ" height="281" width="500"></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/jKPqOtiX3SQ/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13059266"
                        data-post='{"user_id":7400047,"id":13059266}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/stretchypantsal"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1nLzExMDkwOTQyLmpwZw==/25x25%23/n24oGi.jpg)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/stretchypantsal">
                                Stretchy
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-04 09:23:50"
                            >
                              <a href="https://itch.io/post/13059266">
                                9 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+2)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p />
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/jzY3FDpyzSU" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/jzY3FDpyzSU/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                              hard hitting game with cool physics &nbsp;
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13055401"
                        data-post='{"user_id":10834274,"id":13055401}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/dude33"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(/static/images/frog-blue.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/dude33">
                                dude33
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-03 19:50:46"
                            >
                              <a href="https://itch.io/post/13055401">
                                9 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="downvotes">(-5)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                <a href="https://dude33.itch.io/carls-revenge">
                                  https://dude33.itch.io/carls-revenge
                                </a>
                                pls try my game its play in browser
                              </p>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13055082"
                        data-post='{"user_id":8079843,"id":13055082}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/fightingmachine"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(/static/images/frog-gold.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/fightingmachine">
                                fightingmachine
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-03 19:14:52"
                            >
                              <a href="https://itch.io/post/13055082">
                                9 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+3)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p />
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/nqM8vPBJu4A" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/nqM8vPBJu4A/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                              nicegame bro. hits deep.
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13050660"
                        data-post='{"user_id":13740118,"id":13050660}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/jcortezm"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(/static/images/frog-gold.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/jcortezm">
                                JCortezM
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-03 05:46:01"
                            >
                              <a href="https://itch.io/post/13050660">
                                10 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+2)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>AWESOME</p>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13050423"
                        data-post='{"user_id":4850353,"id":13050423}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/thedontlookbacknetwork"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1nLzExMjU2ODQ4LmpwZw==/25x25%23/z0AxiJ.jpg)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/thedontlookbacknetwork">
                                TheDontLookBackNetwork
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-03 04:49:07"
                            >
                              <a href="https://itch.io/post/13050423">
                                10 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+3)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                Very, very &nbsp;good.&nbsp;It &nbsp;has a
                                &nbsp;creepy &nbsp;vibe &nbsp;and &nbsp;a few
                                &nbsp;legit &nbsp;jumpscares and &nbsp;at
                                &nbsp;the &nbsp;same &nbsp;time &nbsp;it
                                &nbsp;has &nbsp;a &nbsp;very effective
                                &nbsp;story &nbsp;to tell &nbsp;about &nbsp;the
                                &nbsp;power &nbsp;of &nbsp;losing
                                &nbsp;something &nbsp;precious &nbsp;before
                                &nbsp;you even &nbsp;really had &nbsp;it
                                &nbsp;to &nbsp;begin with. 10/10
                              </p>
                              <p />
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/Fwz6zfvQ6Yc" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/Fwz6zfvQ6Yc/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13048886"
                        data-post='{"user_id":13717319,"id":13048886}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/rpg-adventures"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(/static/images/frog-blue.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/rpg-adventures">
                                Rpg Adventures
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-03 00:24:33"
                            >
                              <a href="https://itch.io/post/13048886">
                                10 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+2)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>Very coo</p>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13048400"
                        data-post='{"user_id":13611071,"id":13048400}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/le-meilleur"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(/static/images/frog-cyan.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/le-meilleur">
                                le meilleur
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-02 22:50:04"
                            >
                              <a href="https://itch.io/post/13048400">
                                10 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+2)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                I played this game and was completely lost at
                                first but for the dumbest reason 😂😂. But the
                                Game was very interesting
                              </p>
                              <p />
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/LPYBonD-Dt0" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/LPYBonD-Dt0/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13048186"
                        data-post='{"user_id":12198400,"id":13048186}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/fortoide"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage: "url(/static/images/frog.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/fortoide">
                                Fortoide
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-02 22:19:58"
                            >
                              <a href="https://itch.io/post/13048186">
                                10 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+2)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>If you are more into no commentary:</p>
                              <div>
                                <button
                                  itchio=""
                                  aria-label="Click to activate YouTube embed"
                                  type="button"
                                  className="embed_preload youtube_preload"
                                  data-embed_code='<iframe width="500" height="281" src="//www.youtube.com/embed/zHw08Jp5jmY" frameborder="0" allowfullscreen=""></iframe>'
                                  style={{
                                    width: 250,
                                    height: 140,
                                    background:
                                      "url(https://i.ytimg.com/vi/zHw08Jp5jmY/hqdefault.jpg) 50% 50% no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13047174"
                        data-post='{"user_id":1993813,"id":13047174}'
                      >
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/lightining123"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(https://img.itch.zone/aW1nLzMzNzY3NDAuanBn/25x25%23/owTt63.jpg)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/lightining123">
                                Lightining123
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-02 20:34:06"
                            >
                              <a href="https://itch.io/post/13047174">
                                10 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+2)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>wasn 't scary tbh</p>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="community_post has_vote_column"
                        id="post-13044032"
                        data-post='{"user_id":13363953,"id":13044032}'
                      >
                        <div className="post_anchor" id="last-post" />
                        <div className="post_grid">
                          <div className="post_votes">
                            <a
                              title="Vote up"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_up_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_up"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 18 12 6 22 18" />
                              </svg>
                            </a>
                            <a
                              title="Vote down"
                              data-register_action="community_vote"
                              href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              className="vote_down_btn vote_btn"
                            >
                              <svg
                                height={20}
                                version="1.1"
                                aria-hidden=""
                                className="svgicon icon_vote_down"
                                role="img"
                                width={20}
                                viewBox="0 0 24 24"
                              >
                                <polygon points="2 6 12 18 22 6" />
                              </svg>
                            </a>
                          </div>
                          <a
                            className="avatar_container"
                            href="https://itch.io/profile/jellybeans69"
                          >
                            <div
                              className="post_avatar"
                              style={{
                                backgroundImage:
                                  "url(/static/images/frog-gold.png)",
                              }}
                            />
                          </a>
                          <div className="post_header">
                            <span className="post_author">
                              <a href="https://itch.io/profile/jellybeans69">
                                jellybeans69
                              </a>
                            </span>
                            <span
                              className="post_date"
                              title="2025-06-02 14:55:50"
                            >
                              <a href="https://itch.io/post/13044032">
                                10 days ago
                              </a>
                            </span>
                            <span className="vote_counts">
                              <span className="upvotes">(+3)</span>
                            </span>
                          </div>
                          <div className="post_content">
                            <div
                              className="post_body user_formatted"
                              dir="auto"
                            >
                              <p>
                                i was so lost, like wtf was happening during the
                                story, and why are they angry.
                              </p>
                            </div>
                            <div className="post_footer">
                              <a
                                className="post_action reply_btn"
                                data-register_action="community_reply"
                                href="https://itch.io/login?return_to=https%3A%2F%2Fkorogames.itch.io%2Fabodtion&intent=community"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="topic_pager bottom_pager">
                      <span className="page_label">
                        Viewing most recent comments
                        <nobr>
                          <span>1</span>
                          to <span>40</span>
                          of 202
                        </nobr>
                      </span>
                      ·{" "}
                      <a
                        className="page_link"
                        href="https://korogames.itch.io/abodtion/comments?before=163"
                      >
                        Next page
                      </a>
                      ·{" "}
                      <a
                        className="page_link"
                        href="https://korogames.itch.io/abodtion/comments?after=0"
                      >
                        Last page
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right_col column">
                <div className="video_embed">
                  <div
                    className="video_embed_widget base_widget"
                    id="video_embed_1127000"
                    style={{ paddingBottom: "56.25%", position: "relative" }}
                  >
                    <iframe
                      src="//www.youtube.com/embed/tebO-nuY3PQ"
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        left: 0,
                        right: 0,
                      }}
                      allowFullScreen=""
                      frameBorder={0}
                    />
                  </div>
                </div>
                <div className="screenshot_list">
                  <a
                    href="https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQzNS5wbmc=/original/Z7QM7o.png"
                    target="_blank"
                    data-image_lightbox="true"
                  >
                    <img
                      className="screenshot"
                      data-screenshot_id={21189435}
                      src="https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQzNS5wbmc=/347x500/KZ64HN.png"
                      srcSet="https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQzNS5wbmc=/347x500/KZ64HN.png 1x, https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQzNS5wbmc=/794x1000/Vb%2FRW8.png 2x"
                    />
                  </a>
                  <a
                    href="https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQxMS5qcGc=/original/92oBgZ.jpg"
                    target="_blank"
                    data-image_lightbox="true"
                  >
                    <img
                      className="screenshot"
                      data-screenshot_id={21189411}
                      src="https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQxMS5qcGc=/347x500/uX5fMl.jpg"
                      srcSet="https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQxMS5qcGc=/347x500/uX5fMl.jpg 1x, https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQxMS5qcGc=/794x1000/hyPywz.jpg 2x"
                    />
                  </a>
                  <a
                    href="https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQwNy5qcGc=/original/31PTO2.jpg"
                    target="_blank"
                    data-image_lightbox="true"
                  >
                    <img
                      className="screenshot"
                      data-screenshot_id={21189407}
                      src="https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQwNy5qcGc=/347x500/QF0qJl.jpg"
                      srcSet="https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQwNy5qcGc=/347x500/QF0qJl.jpg 1x, https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQwNy5qcGc=/794x1000/2flZup.jpg 2x"
                    />
                  </a>
                  <a
                    href="https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQwMS5qcGc=/original/XolbuN.jpg"
                    target="_blank"
                    data-image_lightbox="true"
                  >
                    <img
                      className="screenshot"
                      data-screenshot_id={21189401}
                      src="https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQwMS5qcGc=/347x500/E5T69o.jpg"
                      srcSet="https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQwMS5qcGc=/347x500/E5T69o.jpg 1x, https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQwMS5qcGc=/794x1000/qlaHI0.jpg 2x"
                    />
                  </a>
                  <a
                    href="https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQzNi5wbmc=/original/kmgUHD.png"
                    target="_blank"
                    data-image_lightbox="true"
                  >
                    <img
                      className="screenshot"
                      data-screenshot_id={21189436}
                      src="https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQzNi5wbmc=/347x500/veQ5mj.png"
                      srcSet="https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQzNi5wbmc=/347x500/veQ5mj.png 1x, https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQzNi5wbmc=/794x1000/vND9%2Fm.png 2x"
                    />
                  </a>
                  <a
                    href="https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQzNy5wbmc=/original/NjxuyV.png"
                    target="_blank"
                    data-image_lightbox="true"
                  >
                    <img
                      className="screenshot"
                      data-screenshot_id={21189437}
                      src="https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQzNy5wbmc=/347x500/5vCP7T.png"
                      srcSet="https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQzNy5wbmc=/347x500/5vCP7T.png 1x, https://img.itch.zone/aW1hZ2UvMzU1NTE3My8yMTE4OTQzNy5wbmc=/794x1000/tXPcae.png 2x"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer" id="view_game_footer">
            <a className="icon_logo" href="https://itch.io/">
              <svg
                height={17}
                version="1.1"
                aria-hidden=""
                className="svgicon icon_itchio_new"
                role="img"
                width={20}
                viewBox="0 0 262.728 235.452"
              >
                <path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08c10.684-30.007 26.017-30.007 29.85-30.007zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z" />
              </svg>
            </a>
            <a href="https://itch.io/">itch.io</a>
            <span className="dot">·</span>
            <a href="https://korogames.itch.io">View all by koro.games</a>
            <span className="dot">·</span>
            <a
              href="javascript:void(0);"
              className="report_game_btn"
              data-lightbox_url="https://korogames.itch.io/abodtion/report"
            >
              Report
            </a>
            <span className="dot">·</span>
            <a
              href="javascript:void(0);"
              className="embed_game_btn"
              data-lightbox_url="https://korogames.itch.io/abodtion/embed"
            >
              Embed
            </a>
            <span className="dot last_dot">·</span>
            <div className="update_timestamp">
              Updated <abbr title="11 June 2025 @ 15:04 UTC">1 day ago</abbr>
            </div>
            <div className="breadcrumbs">
              <a href="/games">Games</a>›{" "}
              <a href="/games/adventure">Adventure</a>›{" "}
              <a href="/games/free">Free</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App1;
