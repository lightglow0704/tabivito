package com.travelmanager.backend.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * 서버 -> 프론트 (내 찜 목록 조회)
 */
@Getter
@Setter
public class FavoriteResponse {
    private String travel_name;
    private String travel_subtitle;
    private String travel_image;

    private String bottom_desc;
    private String hours;
    private String fee;
    private String address;
    private String tip;
    private String link;
}
